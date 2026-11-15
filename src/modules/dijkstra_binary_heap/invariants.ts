import { DijkstraError, DijkstraErrorCode } from "./errors.js";
import { Edge, ShortestPathResult } from "./types.js";

export function verifyBellmanOptimality(adj: readonly (readonly Edge[])[], res: ShortestPathResult): void {
  for (let u = 0; u < adj.length; u++) {
    if (!Number.isFinite(res.dist[u])) continue;
    for (const e of adj[u]) {
      if (res.dist[u] + e.weight + 1e-12 < res.dist[e.to]) {
        throw new DijkstraError(DijkstraErrorCode.INVARIANT_VIOLATION, `unrelaxed edge ${u}->${e.to}`);
      }
    }
  }
}
