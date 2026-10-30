import { EN } from "./catalog";
import { norm } from "./config";
import { getLang } from "./store";

/** Translates a plain string outside JSX (JSON-LD, mail subjects, aria text built in code). Server only. */
export function t(ro: string): string {
  return getLang() === "en" ? (EN.get(norm(ro)) ?? ro) : ro;
}
