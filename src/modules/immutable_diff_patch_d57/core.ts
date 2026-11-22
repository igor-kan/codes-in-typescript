import type { KeyDelta } from "./types.js";

export function diffRecords<V>(src: Readonly<Record<string, V>>, dst: Readonly<Record<string, V>>): Array<KeyDelta<V>> {
  const keys = new Set([...Object.keys(src), ...Object.keys(dst)]);
  const out: Array<KeyDelta<V>> = [];
  for (const k of Array.from(keys).sort()) {
    const a = Object.prototype.hasOwnProperty.call(src, k) ? src[k] : undefined;
    const b = Object.prototype.hasOwnProperty.call(dst, k) ? dst[k] : undefined;
    if (!Object.is(a, b)) out.push({ key: k, prev: a, next: b });
  }
  return out;
}

export function applyPatch<V>(base: Readonly<Record<string, V>>, deltas: ReadonlyArray<KeyDelta<V>>, reverse = false): Record<string, V> {
  const out: Record<string, V> = { ...base };
  for (const d of deltas) {
    const val = reverse ? d.prev : d.next;
    if (val === undefined) delete out[d.key];
    else out[d.key] = val;
  }
  return out;
}
