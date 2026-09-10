/**
 * Post-build prerender: crawls the built SPA with a real (headless) browser,
 * so each route's fully-rendered HTML (including the head tags set by
 * useSEO) gets written as a static index.html. That's what makes the site
 * readable by crawlers/AI agents that don't execute JavaScript.
 *
 * Runs locally (see package.json's "build" script) — patchright resolves
 * from the VS Code extension already installed on this machine, the same
 * way the browser-automation skill's browser.mjs does.
 */
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
import { BLOG_POSTS } from "../src/content/blog";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");

function resolveChromium() {
  const roots: string[] = [];
  for (const base of [
    join(homedir(), ".vscode-server/extensions"),
    join(homedir(), ".vscode/extensions"),
  ]) {
    if (!existsSync(base)) continue;
    const dirs = readdirSync(base)
      .filter((d) => d.startsWith("danielsanmedium.dscodegpt-"))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
    const newest = dirs[dirs.length - 1];
    if (newest) roots.push(join(base, newest, "standalone") + "/");
  }
  roots.push(process.cwd() + "/");
  for (const root of roots) {
    try {
      const mod = createRequire(root)("patchright");
      const chromium = (mod as any)?.chromium ?? (mod as any)?.default?.chromium;
      if (chromium) return chromium;
    } catch {
      /* try next root */
    }
  }
  throw new Error("Could not resolve patchright. Checked:\n  " + roots.join("\n  "));
}

const ROUTES = [
  "/",
  "/proyectos",
  "/productos",
  "/nosotros",
  "/blog",
  ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
];

async function main() {
  const chromium = resolveChromium();
  const server = await preview({ preview: { port: 4310, strictPort: false } });
  const address = server.resolvedUrls?.local?.[0];
  if (!address) throw new Error("Preview server did not report an address");
  const base = address.replace(/\/$/, "");

  const browser = await chromium.launch({
    headless: true,
    channel: "chromium",
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--enable-unsafe-swiftshader"],
  });
  const page = await browser.newPage();

  for (const route of ROUTES) {
    const url = `${base}${route}`;
    await page.goto(url, { waitUntil: "networkidle" });
    // Let Reveal's IntersectionObserver + useSEO effects settle.
    await page.evaluate(() => new Promise((r) => setTimeout(r, 250)));
    const html = await page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);

    const outDir = route === "/" ? distDir : resolve(distDir, `.${route}`);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(resolve(outDir, "index.html"), html, "utf-8");
    console.log(`prerendered ${route} -> ${outDir}/index.html`);
  }

  await browser.close();
  await server.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
