import { findFirstGe } from "./core.js";
import { SuffixIndex } from "./types.js";

export function countSubstringMatches(idx: SuffixIndex, pat: string): number {
  if (pat.length === 0 || pat.length > idx.text.length) return 0;
  const l = findFirstGe(idx, pat);
  let r = l;
  while (r < idx.sa.length && idx.text.startsWith(pat, idx.sa[r])) {
    r++;
  }
  return r - l;
}
