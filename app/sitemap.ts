import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";
import { abs, SEO } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.entries(SEO).map(([path, s]) => ({
    url: abs(path),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: s.priority,
  }));
  const guides = GUIDES.map((g) => ({ url: abs(`/ghiduri/${g.slug}`), changeFrequency: "monthly" as const, priority: 0.5 }));
  return [...pages, ...guides];
}
