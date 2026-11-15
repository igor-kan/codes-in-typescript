import { Span } from "./types.js";

export function totalSpanLength(spans: readonly Span[]): number {
  let acc = 0;
  for (const s of spans) acc += s.end - s.start;
  return acc;
}
