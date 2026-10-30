import * as R from "react/jsx-dev-runtime";
import { prepare } from "#translate";

export const Fragment = R.Fragment;
export type { JSX } from "react/jsx-dev-runtime";

type Fn = (type: unknown, props: unknown, key: unknown, isStatic: boolean, source: unknown, self: unknown) => unknown;

export const jsxDEV: Fn = (type, props, key, isStatic, source, self) =>
  (R.jsxDEV as Fn)(type, prepare(type, props), key, isStatic, source, self);
