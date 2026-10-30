import { pathFor, type Lang } from "@/lib/i18n/config";
import { getLang, getPath } from "@/lib/i18n/store";

const LABELS: { lang: Lang; short: string; name: string }[] = [
  { lang: "ro", short: "RO", name: "Română" },
  { lang: "en", short: "EN", name: "English" },
];

type Tone = "light" | "dark";

/**
 * Language switch. Each option is a real link to the same page in the other language, so it works without
 * JavaScript and is crawlable. The current language is plain text.
 */
export function LangSwitch({ tone = "light", className, size = 13 }: { tone?: Tone; className?: string; size?: number }) {
  const lang = getLang();
  const path = getPath();
  const active = tone === "dark" ? "#FFFFFF" : "#0F0053";
  const idle = tone === "dark" ? "rgba(255,255,255,0.55)" : "#6E6E78";
  return (
    <div
      role="group"
      aria-label={lang === "ro" ? "Limba site-ului" : "Site language"}
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: `${size}px`, letterSpacing: "0.1em", fontFamily: "var(--font-outfit), Helvetica, sans-serif" }}
    >
      {LABELS.map((l, i) => (
        <span key={l.lang} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          {i > 0 && <span aria-hidden="true" style={{ opacity: 0.35 }}>/</span>}
          {l.lang === lang ? (
            <span aria-current="true" lang={l.lang} style={{ color: active, fontWeight: 500 }}>
              {l.short}
            </span>
          ) : (
            <a href={pathFor(path, l.lang)} hrefLang={l.lang} lang={l.lang} aria-label={l.name} className="idl-lang-link" style={{ color: idle }}>
              {l.short}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}
