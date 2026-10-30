/** Language and route configuration. Pure TypeScript: safe to import from the proxy, server and client code. */

export const LANGS = ["ro", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "ro";

export const isLang = (v: unknown): v is Lang => v === "ro" || v === "en";

/** Internal (Romanian) path -> public English path. Romanian paths are also the folder names under app/. */
export const ROUTES: Record<string, string> = {
  "/": "/",
  "/servicii": "/services",
  "/servicii/ghiduri-chirurgicale": "/services/surgical-guides",
  "/servicii/modele-mandibulare-3d": "/services/3d-mandibular-models",
  "/servicii/segmentare-cbct": "/services/cbct-segmentation",
  "/servicii/design-cad-cam": "/services/cad-cam-design",
  "/portofoliu": "/portfolio",
  "/cum-lucram": "/how-we-work",
  "/ghiduri": "/guides",
  "/intrebari": "/faq",
  "/despre-noi": "/about",
  "/contact": "/contact",
  "/multumim": "/thank-you",
  "/politica-cookie": "/cookie-policy",
  "/politica-de-confidentialitate": "/privacy-policy",
  "/termeni-si-conditii": "/terms",
};

const EN_TO_RO: Record<string, string> = Object.fromEntries(Object.entries(ROUTES).map(([ro, en]) => [en, ro]));

const stripSlash = (p: string) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p);

export function roToEn(path: string): string | null {
  const p = stripSlash(path);
  if (p in ROUTES) return ROUTES[p];
  if (p.startsWith("/ghiduri/")) return "/guides/" + p.slice("/ghiduri/".length);
  return null;
}

export function enToRo(path: string): string | null {
  const p = stripSlash(path);
  if (p in EN_TO_RO) return EN_TO_RO[p];
  if (p.startsWith("/guides/")) return "/ghiduri/" + p.slice("/guides/".length);
  return null;
}

/** Public URL path (without origin) of an internal Romanian path, in the given language. */
export function pathFor(roPath: string, lang: Lang): string {
  if (lang === "ro") return roPath;
  const en = roToEn(roPath);
  if (en === null) return roPath;
  return en === "/" ? "/en" : "/en" + en;
}

/** Rewrites an internal site link (optionally with ?query and #hash) for the given language. Other links are returned untouched. */
export function localizeHref(href: string, lang: Lang): string {
  if (lang === "ro" || !href.startsWith("/") || href.startsWith("//")) return href;
  const i = href.search(/[?#]/);
  const path = i === -1 ? href : href.slice(0, i);
  const tail = i === -1 ? "" : href.slice(i);
  const en = roToEn(path);
  if (en === null) return href;
  return (en === "/" ? "/en" : "/en" + en) + tail;
}

/** Collapses whitespace so catalog keys match text regardless of source formatting. */
export const norm = (s: string) => s.replace(/\s+/g, " ").trim();
