import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";
import { features } from "@/lib/features";
import { abs, SEO } from "@/lib/seo";

const LEGACY = ["/servicii/modele-mandibulare-3d", "/servicii/segmentare-cbct", "/servicii/design-cad-cam"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.entries(SEO)
    .filter(([path]) => (features.guides || path !== "/ghiduri") && (features.legacyServices || !LEGACY.includes(path)))
    .map(([path, s]) => ({
    url: abs(path),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: s.priority,
  }));
  const guides = (features.guides ? GUIDES : []).map((g) => ({ url: abs(`/ghiduri/${g.slug}`), changeFrequency: "monthly" as const, priority: 0.5 }));
  return [...pages, ...guides];
}
