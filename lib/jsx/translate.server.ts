import { jsx as rjsx } from "react/jsx-runtime";
import { EN } from "@/lib/i18n/catalog";
import { localizeHref, norm } from "@/lib/i18n/config";
import { getLang } from "@/lib/i18n/store";

type Props = Record<string, unknown> & { children?: unknown };

const ATTRS = ["placeholder", "aria-label", "alt", "title", "defaultValue"];
const ACCENT = "#26B7BC";

/** Translates one text node, keeping its surrounding whitespace. */
function text(s: string): string {
  const core = norm(s);
  if (!core) return s;
  const hit = EN.get(core);
  if (!hit) return s;
  return s.slice(0, s.length - s.trimStart().length) + hit + s.slice(s.trimEnd().length);
}

type El = { type: unknown; props: Props };
const isEl = (c: unknown): c is El => !!c && typeof c === "object" && "type" in c && "props" in c;

const isAccentOf = (type: unknown, props: Props) => {
  if (typeof type === "function" && (type as { displayName?: string }).displayName === "Accent") return true;
  const st = props.style as Record<string, unknown> | undefined;
  return type === "span" && !!st && Object.keys(st).length === 1 && st.color === ACCENT;
};
const isAccent = (el: El) => isAccentOf(el.type, el.props);

/** Describes a heading made of text, <br/> and accent spans as "Text *accent* text|next line". */
function signature(children: unknown[]): string | null {
  let s = "";
  for (const c of children) {
    if (typeof c === "string" || typeof c === "number") s += c;
    else if (c == null || typeof c === "boolean") continue;
    else if (Array.isArray(c)) {
      const inner = signature(c);
      if (inner === null) return null;
      s += inner;
    } else if (isEl(c)) {
      if (c.type === "br") s += "|";
      else if (isAccent(c) && typeof c.props.children === "string") s += "*" + c.props.children + "*";
      else return null;
    } else return null;
  }
  return s;
}

function build(template: string): unknown[] {
  return template.split(/(\*[^*]+\*|\|)/).filter(Boolean).map((part, i) => {
    if (part === "|") return rjsx("br", {}, "b" + i);
    if (part.startsWith("*")) return rjsx("span", { style: { color: ACCENT }, children: part.slice(1, -1) }, "a" + i);
    return part;
  });
}

function children(c: unknown): unknown {
  if (typeof c === "string") return text(c);
  if (!Array.isArray(c)) return c;
  if (c.some((x) => typeof x !== "string" && typeof x !== "number")) {
    const sig = signature(c);
    if (sig !== null) {
      const hit = EN.get(norm(sig));
      if (hit) return build(hit);
    }
  }
  let changed = false;
  const out = c.map((x) => {
    if (typeof x !== "string") return x;
    const t = text(x);
    if (t !== x) changed = true;
    return t;
  });
  return changed ? out : c;
}

/** Returns the props to render: English text and localised links when the request language is English. */
export function prepare<P>(type: unknown, props: P): P {
  if (getLang() === "ro" || !props) return props;
  const p = props as Props;
  let out: Props | null = null;
  const set = (k: string, v: unknown) => {
    out ??= { ...p };
    out[k] = v;
  };
  // Accent text is left alone here: the enclosing heading translates it together with its neighbours.
  if ("children" in p && !isAccentOf(type, p)) {
    const c = children(p.children);
    if (c !== p.children) set("children", c);
  }
  if (typeof type === "string") {
    for (const a of ATTRS) if (typeof p[a] === "string") {
      const t = text(p[a] as string);
      if (t !== p[a]) set(a, t);
    }
    // Links with hreflang point at a specific language version and must stay as written.
    for (const a of p.hrefLang ? [] : ["href", "data-href"]) if (typeof p[a] === "string") {
      const h = localizeHref(p[a] as string, "en");
      if (h !== p[a]) set(a, h);
    }
  }
  return (out ?? props) as P;
}
