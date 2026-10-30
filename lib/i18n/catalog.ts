import { norm } from "./config";
import { EN_1 } from "./catalog.en.1";
import { EN_2 } from "./catalog.en.2";
import { EN_3 } from "./catalog.en.3";
import { EN_4 } from "./catalog.en.4";

/** English text keyed by the normalised Romanian source text. */
export const EN = new Map<string, string>([...EN_1, ...EN_2, ...EN_3, ...EN_4].map(([ro, en]) => [norm(ro), en]));
