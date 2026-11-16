import { RollbackDSU } from "./core.js";

export async function parallelConnectivitySnapshots(n: number, batches: readonly (readonly [number, number][])[]): Promise<number[]> {
  return Promise.all(batches.map(async (edges) => {
    const dsu = new RollbackDSU(n);
    for (const [u, v] of edges) dsu.unite(u, v);
    return dsu.components;
  }));
}
