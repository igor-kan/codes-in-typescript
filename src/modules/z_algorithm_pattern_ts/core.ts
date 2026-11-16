import { ZSearchError, ZSearchErrorCode } from "./errors.js";
import { PatternFinder } from "./interface.js";

export function computeZArray(s: string): Int32Array {
  const n = s.length;
  const z = new Int32Array(n);
  if (n === 0) return z;
  z[0] = n;
  let l = 0;
  let r = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) {
      z[i] = Math.min(r - i, z[i - l]);
    }
    while (i + z[i] < n && s.charCodeAt(z[i]) === s.charCodeAt(i + z[i])) {
      z[i]++;
    }
    if (i + z[i] > r) {
      l = i;
      r = i + z[i];
    }
  }
  return z;
}

export class ZMatcher implements PatternFinder {
  public findAll(text: string, pattern: string): number[] {
    if (pattern.length === 0) {
      throw new ZSearchError(ZSearchErrorCode.EMPTY_INPUT, "empty pattern");
    }
    const combined = pattern + "\u0000" + text;
    const z = computeZArray(combined);
    const out: number[] = [];
    const offset = pattern.length + 1;
    for (let i = offset; i < combined.length; i++) {
      if (z[i] === pattern.length) out.push(i - offset);
    }
    return out;
  }

  public smallestPeriod(s: string): number {
    if (s.length === 0) return 0;
    const z = computeZArray(s);
    for (let i = 1; i < s.length; i++) {
      if (i + z[i] === s.length) return i;
    }
    return s.length;
  }
}
