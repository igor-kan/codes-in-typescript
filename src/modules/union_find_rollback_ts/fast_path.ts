import { RollbackDSU } from "./core.js";

export function uniteBatch(dsu: RollbackDSU, edges: readonly [number, number][]): number {
  let merged = 0;
  for (const [u, v] of edges) {
    if (dsu.unite(u, v)) merged++;
  }
  return merged;
}
