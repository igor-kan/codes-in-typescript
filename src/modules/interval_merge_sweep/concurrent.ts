import { mergeSpans } from "./core.js";
import { Span } from "./types.js";

export async function parallelUnion(groups: readonly (readonly Span[])[]): Promise<Span[]> {
  const parts = await Promise.all(groups.map(async (g) => mergeSpans(g)));
  return mergeSpans(parts.flat());
}
