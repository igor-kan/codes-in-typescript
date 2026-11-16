import { buildSuffixArray } from "./core.js";
import { countSubstringMatches } from "./fast_path.js";

export async function parallelIndexAndCount(docs: readonly string[], query: string): Promise<number[]> {
  return Promise.all(docs.map(async (d) => countSubstringMatches(buildSuffixArray(d), query)));
}
