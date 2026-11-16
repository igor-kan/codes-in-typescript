import { ZMatcher } from "./core.js";

export async function batchFindOccurrences(docs: readonly string[], pattern: string): Promise<number[][]> {
  const m = new ZMatcher();
  return Promise.all(docs.map(async (d) => m.findAll(d, pattern)));
}
