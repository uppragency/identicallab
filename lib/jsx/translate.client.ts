/** Client bundles render untranslated: the browser receives the HTML translated by the server. */
export function prepare<P>(_type: unknown, props: P): P {
  return props;
}
