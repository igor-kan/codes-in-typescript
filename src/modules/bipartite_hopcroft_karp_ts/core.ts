import { BipartiteMatch } from './types.js';

export function hopcroftKarp(nLeft: number, nRight: number, edges: readonly [number, number][]): BipartiteMatch {
  const adj: number[][] = Array.from({ length: nLeft }, () => []);
  for (const [u, v] of edges) adj[u].push(v);
  const matchL = new Int32Array(nLeft).fill(-1);
  const matchR = new Int32Array(nRight).fill(-1);
  const dist = new Int32Array(nLeft);
  const INF = 1e9;
  function bfs(): boolean {
    const q: number[] = [];
    for (let u = 0; u < nLeft; u++) {
      if (matchL[u] === -1) { dist[u] = 0; q.push(u); }
      else dist[u] = INF;
    }
    let found = false;
    for (let head = 0; head < q.length; head++) {
      const u = q[head];
      for (const v of adj[u]) {
        const u2 = matchR[v];
        if (u2 === -1) found = true;
        else if (dist[u2] === INF) { dist[u2] = dist[u] + 1; q.push(u2); }
      }
    }
    return found;
  }
  function dfs(u: number): boolean {
    for (const v of adj[u]) {
      const u2 = matchR[v];
      if (u2 === -1 || (dist[u2] === dist[u] + 1 && dfs(u2))) {
        matchL[u] = v; matchR[v] = u; return true;
      }
    }
    dist[u] = INF;
    return false;
  }
  let size = 0;
  while (bfs()) for (let u = 0; u < nLeft; u++) if (matchL[u] === -1 && dfs(u)) size++;
  return { size, matchLeft: Array.from(matchL) };
}
