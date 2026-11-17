import { SccResult } from './types.js';

export function tarjanScc(n: number, edges: readonly [number, number][]): SccResult {
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) adj[u].push(v);
  const dfn = new Int32Array(n).fill(-1);
  const low = new Int32Array(n);
  const comp = new Int32Array(n).fill(-1);
  const onSt = new Uint8Array(n);
  const st: number[] = [];
  let timer = 0, scc = 0;
  function dfs(u: number): void {
    dfn[u] = low[u] = timer++;
    st.push(u); onSt[u] = 1;
    for (const w of adj[u]) {
      if (dfn[w] === -1) { dfs(w); low[u] = Math.min(low[u], low[w]); }
      else if (onSt[w]) low[u] = Math.min(low[u], dfn[w]);
    }
    if (low[u] === dfn[u]) {
      while (true) {
        const v = st.pop()!;
        onSt[v] = 0; comp[v] = scc;
        if (v === u) break;
      }
      scc++;
    }
  }
  for (let i = 0; i < n; i++) if (dfn[i] === -1) dfs(i);
  return { comp: Array.from(comp), count: scc };
}
