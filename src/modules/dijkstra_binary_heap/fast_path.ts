import { ShortestPathResult } from "./types.js";

export function reconstructPath(res: ShortestPathResult, target: number): number[] {
  if (!Number.isFinite(res.dist[target])) return [];
  const path: number[] = [];
  for (let v = target; v !== -1; v = res.parent[v]) path.push(v);
  return path.reverse();
}
