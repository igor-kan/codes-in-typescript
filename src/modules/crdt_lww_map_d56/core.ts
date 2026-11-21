import type { LwwStamp } from "./types.js";

export function mergeStamp<T>(a: LwwStamp<T>, b: LwwStamp<T>): LwwStamp<T> {
  if (a.ts > b.ts) return a;
  if (b.ts > a.ts) return b;
  return a.actor >= b.actor ? a : b;
}

export function mergeLwwMaps<T>(
  left: Readonly<Record<string, LwwStamp<T>>>,
  right: Readonly<Record<string, LwwStamp<T>>>
): Record<string, LwwStamp<T>> {
  const out: Record<string, LwwStamp<T>> = { ...left };
  for (const key of Object.keys(right)) {
    const r = right[key];
    out[key] = out[key] ? mergeStamp(out[key], r) : r;
  }
  return out;
}
