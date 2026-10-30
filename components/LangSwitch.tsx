import { pathFor, type Lang } from "@/lib/i18n/config";
import { getLang, getPath } from "@/lib/i18n/store";

const LABELS: { lang: Lang; name: string }[] = [
  { lang: "ro", name: "Română" },
  { lang: "en", name: "English" },
];

type Tone = "light" | "dark";

function Flag({ lang }: { lang: Lang }) {
  return lang === "ro" ? (
    <svg viewBox="0 0 3 2" width="24" height="16" aria-hidden="true" focusable="false">
      <rect width="1" height="2" fill="#002B7F" />
      <rect x="1" width="1" height="2" fill="#FCD116" />
      <rect x="2" width="1" height="2" fill="#CE1126" />
    </svg>
  ) : (
    <svg viewBox="0 0 60 40" width="24" height="16" aria-hidden="true" focusable="false">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="3" />
      <path d="M30 0V40M0 20H60" stroke="#FFFFFF" strokeWidth="13" />
      <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  );
}

/**
 * Language switch shown as flags. Each flag is a real link to the same page in the other language, so it works without
 * JavaScript and is crawlable. The current language is a non-link flag. The tooltip with the language name is pure CSS.
 */
export function LangSwitch({ tone = "light", className }: { tone?: Tone; className?: string; size?: number }) {
  const lang = getLang();
  const path = getPath();
  return (
    <div
      role="group"
      aria-label={lang === "ro" ? "Limba site-ului" : "Site language"}
      className={`idl-flags ${tone === "dark" ? "idl-flags-dark" : ""} ${className ?? ""}`}
    >
      {LABELS.map((l) =>
        l.lang === lang ? (
          <span key={l.lang} className="idl-flag is-active" data-tip={l.name} aria-current="true" lang={l.lang} role="img" aria-label={l.name}>
            <Flag lang={l.lang} />
          </span>
        ) : (
          <a key={l.lang} className="idl-flag" data-tip={l.name} href={pathFor(path, l.lang)} hrefLang={l.lang} lang={l.lang} aria-label={l.name}>
            <Flag lang={l.lang} />
          </a>
        ),
      )}
    </div>
  );
}
