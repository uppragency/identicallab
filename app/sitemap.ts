import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";
import { features } from "@/lib/features";
import { abs, SEO } from "@/lib/seo";
import { LANGS, pathFor } from "@/lib/i18n/config";

const LEGACY = ["/servicii/modele-mandibulare-3d", "/servicii/segmentare-cbct", "/servicii/design-cad-cam"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.entries(SEO)
    .filter(([path]) => (features.guides || path !== "/ghiduri") && (features.legacyServices || !LEGACY.includes(path)))
    .flatMap(([path, s]) =>
      // Every page is listed once per language, each entry pointing at its translations.
      LANGS.map((lang) => ({
        url: abs(pathFor(path, lang)),
        changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
        priority: s.priority,
        alternates: { languages: { "ro-RO": abs(pathFor(path, "ro")), en: abs(pathFor(path, "en")) } },
      })),
    );
  const guides = (features.guides ? GUIDES : []).map((g) => ({ url: abs(`/ghiduri/${g.slug}`), changeFrequency: "monthly" as const, priority: 0.5 }));
  return [...pages, ...guides];
}
