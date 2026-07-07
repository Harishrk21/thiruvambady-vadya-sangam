import { useEffect } from "react";
import { SITE_URL, PRIMARY_KEYWORDS, SITE_NAME } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";

const setMeta = (name, content, attr = "name") => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO = ({ title, description, path = "/", keywords, jsonLd, ogImage }) => {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const keywordStr = keywords || PRIMARY_KEYWORDS.join(", ");
  const image = ogImage || SEO_IMAGES.default;

  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("keywords", keywordStr);
    setMeta("robots", "index, follow");
    setCanonical(canonical);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:image", image, "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
  }, [title, description, canonical, keywordStr, image]);

  useEffect(() => {
    const id = "page-json-ld";
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    if (!jsonLd) return;

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(
      Array.isArray(jsonLd) ? jsonLd : jsonLd
    );
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [jsonLd]);

  return null;
};

export default SEO;
