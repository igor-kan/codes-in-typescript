import { computeZArray } from "./core.js";

export function countPrefixMatches(text: string, pattern: string): number {
  const m = pattern.length;
  const combined = pattern + "\u0000" + text;
  const z = computeZArray(combined);
  let cnt = 0;
  for (let i = m + 1; i < combined.length; i++) {
    if (z[i] === m) cnt++;
  }
  return cnt;
}
