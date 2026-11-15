import { dijkstraShortestPaths } from "./core.js";
import { Edge, ShortestPathResult } from "./types.js";

export async function allPairsViaDijkstra(adj: readonly (readonly Edge[])[]): Promise<ShortestPathResult[]> {
  return Promise.all(adj.map(async (_, s) => dijkstraShortestPaths(adj, s)));
}
