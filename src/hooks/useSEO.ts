import { useEffect } from "react";
import { SITE_NAME, SITE_URL } from "../config/site";

interface SEOInput {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/blog/mi-post". */
  path: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: object | object[];
}

/**
 * Sets document head tags (title, description, canonical, OG/Twitter, JSON-LD)
 * on mount. Runs client-side via useEffect, same as the rest of this app's
 * DOM work (Reveal, ScrollManager) — the production build is crawled with a
 * headless browser after JS executes, so effect-set tags end up in the static
 * HTML each route ships (see scripts/prerender.mts).
 */
export function useSEO({ title, description, path, image, type = "website", jsonLd }: SEOInput) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;
    const url = `${SITE_URL}${path}`;

    const created: Element[] = [];

    function setMeta(attr: "name" | "property", key: string, content: string) {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        created.push(el);
      }
      el.setAttribute("content", content);
    }

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    if (image) setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    if (image) setMeta("name", "twitter:image", image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
      created.push(canonical);
    }
    canonical.setAttribute("href", url);

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      for (const item of Array.isArray(jsonLd) ? jsonLd : [jsonLd]) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(item);
        document.head.appendChild(script);
        scripts.push(script);
      }
    }

    return () => {
      created.forEach((el) => el.remove());
      scripts.forEach((el) => el.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, type, JSON.stringify(jsonLd)]);
}
