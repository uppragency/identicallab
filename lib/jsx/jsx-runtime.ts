import * as R from "react/jsx-runtime";
import { prepare } from "#translate";

export const Fragment = R.Fragment;
export type { JSX } from "react/jsx-runtime";

type Fn = (type: unknown, props: unknown, key?: unknown) => unknown;

export const jsx: Fn = (type, props, key) => (R.jsx as Fn)(type, prepare(type, props), key);
export const jsxs: Fn = (type, props, key) => (R.jsxs as Fn)(type, prepare(type, props), key);
