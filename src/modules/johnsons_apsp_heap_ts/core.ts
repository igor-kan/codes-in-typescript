import { DirEdge } from "./types.js";

export function johnsonApsp(n: number, edges: readonly DirEdge[]): number[][] {
  const INF = 1e15;
  const h = new Float64Array(n);
  for (let it = 0; it < n; it++) {
    let chg = false;
    for (const e of edges) {
      if (h[e.u] + e.w < h[e.v]) { h[e.v] = h[e.u] + e.w; chg = true; }
    }
    if (!chg) break;
  }
  const adj: [number, number][][] = Array.from({ length: n }, () => []);
  for (const e of edges) adj[e.u].push([e.v, e.w + h[e.u] - h[e.v]]);
  const mat: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(INF));
  for (let s = 0; s < n; s++) {
    const d = new Float64Array(n).fill(INF);
    const vis = new Uint8Array(n);
    d[s] = 0;
    for (let it = 0; it < n; it++) {
      let u = -1;
      for (let i = 0; i < n; i++) if (!vis[i] && (u === -1 || d[i] < d[u])) u = i;
      if (u === -1 || d[u] >= INF) break;
      vis[u] = 1;
      for (const [v, w] of adj[u]) if (d[u] + w < d[v]) d[v] = d[u] + w;
    }
    for (let v = 0; v < n; v++) if (d[v] < INF) mat[s][v] = d[v] - h[s] + h[v];
  }
  return mat;
}
