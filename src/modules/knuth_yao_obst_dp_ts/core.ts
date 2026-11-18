import { ObstAns } from "./types.js";

export function solveObst(freq: readonly number[]): ObstAns {
  const n = freq.length;
  const pref = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) pref[i + 1] = pref[i] + freq[i];
  const dp: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  const opt: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  for (let i = 0; i < n; i++) { dp[i][i] = freq[i]; opt[i][i] = i; }
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      const w = pref[j + 1] - pref[i];
      let best = 1e15, br = i;
      for (let r = opt[i][j - 1]; r <= opt[i + 1][j]; r++) {
        const left = r > i ? dp[i][r - 1] : 0;
        const right = r < j ? dp[r + 1][j] : 0;
        const cand = left + right + w;
        if (cand < best) { best = cand; br = r; }
      }
      dp[i][j] = best; opt[i][j] = br;
    }
  }
  return { cost: dp[0][n - 1], root: opt[0][n - 1] };
}
