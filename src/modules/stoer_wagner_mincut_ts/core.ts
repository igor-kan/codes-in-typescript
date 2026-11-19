import { CutSummary } from "./types.js";

export function stoerWagnerMinCut(adj: readonly (readonly number[])[]): CutSummary {
  const n = adj.length;
  const w = adj.map((r) => [...r]);
  const vtx = Array.from({ length: n }, (_, i) => i);
  let best = 1e15, phases = 0;
  for (let m = n; m > 1; m--) {
    const wt = new Float64Array(m);
    const used = new Uint8Array(m);
    let prev = -1, last = -1;
    for (let it = 0; it < m; it++) {
      let sel = -1;
      for (let i = 0; i < m; i++) {
        if (!used[i] && (sel === -1 || wt[i] > wt[sel])) sel = i;
      }
      used[sel] = 1; prev = last; last = sel;
      for (let i = 0; i < m; i++) if (!used[i]) wt[i] += w[vtx[sel]][vtx[i]];
    }
    best = Math.min(best, wt[last]);
    phases++;
    const u = vtx[prev], v = vtx[last];
    for (let i = 0; i < m; i++) {
      const k = vtx[i];
      if (k !== u && k !== v) { w[u][k] += w[v][k]; w[k][u] += w[k][v]; }
    }
    vtx[last] = vtx[m - 1];
  }
  return { minCut: best, phases };
}
