import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = "https://noory.io";

export function useSEO({ title, description, url, type = "website", jsonLd }: SEOProps) {
  useEffect(() => {
    const rawUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;
    const fullUrl = rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`;

    document.title = title;

    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:locale", "fr_FR");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // JSON-LD
    let script = document.querySelector('script[data-seo="dynamic"]') as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "dynamic");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      // Cleanup dynamic JSON-LD on unmount
      const s = document.querySelector('script[data-seo="dynamic"]');
      if (s) s.remove();
    };
  }, [title, description, url, type, jsonLd]);
}
