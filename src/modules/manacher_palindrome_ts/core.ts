import { ManacherError, ManacherErrorCode } from "./errors.js";
import { PalindromeAnalyzer } from "./interface.js";
import { PalindromeSummary } from "./types.js";

export class ManacherEngine implements PalindromeAnalyzer {
  public analyze(s: string): PalindromeSummary {
    if (s.length === 0) throw new ManacherError(ManacherErrorCode.EMPTY_INPUT, "empty string");
    const t: string[] = ["^"];
    for (let i = 0; i < s.length; i++) t.push("#", s[i]);
    t.push("#", "$");
    const m = t.length;
    const p = new Int32Array(m);
    let center = 0, right = 0, bestLen = 0, bestCenter = 0, count = 0;
    for (let i = 1; i < m - 1; i++) {
      const mirror = 2 * center - i;
      if (i < right) p[i] = Math.min(right - i, p[mirror]);
      while (t[i + 1 + p[i]] === t[i - 1 - p[i]]) p[i]++;
      if (i + p[i] > right) { center = i; right = i + p[i]; }
      if (p[i] > bestLen) { bestLen = p[i]; bestCenter = i; }
      count += (p[i] + 1) >> 1;
    }
    const start = (bestCenter - bestLen) >> 1;
    return { longest: s.slice(start, start + bestLen), start, length: bestLen, count };
  }
}
