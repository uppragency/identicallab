import { cache } from "react";
import type { Lang } from "./config";

type PageState = { lang: Lang; path: string };

/** Per-request state. React's cache() scopes it to the current server render, so concurrent requests never share it. */
const state = cache((): PageState => ({ lang: "ro", path: "/" }));

/** Called at the top of every page (and the layout) with the internal Romanian path of the page. */
export function setPage(lang: Lang, path?: string) {
  const s = state();
  s.lang = lang;
  if (path) s.path = path;
}

export const getLang = (): Lang => state().lang;
export const getPath = (): string => state().path;
