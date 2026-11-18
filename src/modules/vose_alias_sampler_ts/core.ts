import { AliasTable } from "./types.js";

export function buildAliasTable(weights: readonly number[]): AliasTable {
  const n = weights.length;
  const sum = weights.reduce((a, b) => a + b, 0);
  const scaled = weights.map((w) => (w * n) / sum);
  const prob = new Float64Array(n).fill(1.0);
  const alias = Int32Array.from({ length: n }, (_, i) => i);
  const small: number[] = [], large: number[] = [];
  for (let i = 0; i < n; i++) (scaled[i] < 1.0 ? small : large).push(i);
  while (small.length > 0 && large.length > 0) {
    const s = small.pop()!, l = large.pop()!;
    prob[s] = scaled[s];
    alias[s] = l;
    scaled[l] = scaled[l] + scaled[s] - 1.0;
    (scaled[l] < 1.0 ? small : large).push(l);
  }
  return { prob, alias };
}

export function sampleAlias(t: AliasTable, bucket: number, u01: number): number {
  return u01 < t.prob[bucket] ? bucket : t.alias[bucket];
}
