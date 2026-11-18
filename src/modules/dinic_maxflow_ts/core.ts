import { FlowEdge } from "./types.js";

export function dinicMaxFlow(n: number, s: number, t: number, edges: readonly [number, number, number][]): number {
  const adj: FlowEdge[][] = Array.from({ length: n }, () => []);
  for (const [u, v, c] of edges) {
    adj[u].push({ to: v, rev: adj[v].length, cap: c });
    adj[v].push({ to: u, rev: adj[u].length - 1, cap: 0 });
  }
  let flow = 0;
  while (true) {
    const level = new Int32Array(n).fill(-1);
    level[s] = 0;
    const q: number[] = [s];
    for (let h = 0; h < q.length; h++) {
      const u = q[h];
      for (const e of adj[u]) {
        if (e.cap > 0 && level[e.to] < 0) {
          level[e.to] = level[u] + 1;
          q.push(e.to);
        }
      }
    }
    if (level[t] < 0) break;
    const ptr = new Int32Array(n);
    const dfs = (u: number, pushed: number): number => {
      if (pushed === 0 || u === t) return pushed;
      while (ptr[u] < adj[u].length) {
        const e = adj[u][ptr[u]];
        if (level[e.to] === level[u] + 1 && e.cap > 0) {
          const tr = dfs(e.to, Math.min(pushed, e.cap));
          if (tr > 0) {
            e.cap -= tr;
            adj[e.to][e.rev].cap += tr;
            return tr;
          }
        }
        ptr[u]++;
      }
      return 0;
    };
    while (true) {
      const p = dfs(s, 1e9);
      if (p === 0) break;
      flow += p;
    }
  }
  return flow;
}
