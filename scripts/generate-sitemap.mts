import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { BLOG_POSTS } from "../src/content/blog";

const SITE_URL = "https://dexasolutions.vercel.app";

const staticRoutes = [
  { path: "/", priority: "1.0" },
  { path: "/proyectos", priority: "0.8" },
  { path: "/productos", priority: "0.8" },
  { path: "/nosotros", priority: "0.6" },
  { path: "/blog", priority: "0.7" },
];

const blogRoutes = BLOG_POSTS.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: "0.7",
  lastmod: post.publishedAt,
}));

const routes = [...staticRoutes, ...blogRoutes];

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <priority>${r.priority}</priority>${"lastmod" in r ? `\n    <lastmod>${r.lastmod}</lastmod>` : ""}
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = resolve(import.meta.dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml, "utf-8");
console.log(`sitemap.xml written with ${routes.length} routes`);
