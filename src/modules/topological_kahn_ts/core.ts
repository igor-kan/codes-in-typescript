import { TopoSchedule } from "./types.js";

export function scheduleDag(nodes: readonly string[], edges: readonly [string, string][]): TopoSchedule {
  const indeg = new Map<string, number>();
  const adj = new Map<string, string[]>();
  for (const n of nodes) {
    indeg.set(n, 0);
    adj.set(n, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
    indeg.set(v, (indeg.get(v) ?? 0) + 1);
  }
  const order: string[] = [];
  const waves: string[][] = [];
  let wave = nodes.filter((n) => indeg.get(n) === 0).sort();
  while (wave.length > 0) {
    waves.push(wave);
    const nextWave: string[] = [];
    for (const u of wave) {
      order.push(u);
      for (const v of adj.get(u)!) {
        const d = (indeg.get(v) ?? 0) - 1;
        indeg.set(v, d);
        if (d === 0) nextWave.push(v);
      }
    }
    wave = nextWave.sort();
  }
  const placed = new Set(order);
  const blockedNodes = nodes.filter((n) => !placed.has(n));
  return { isAcyclic: order.length === nodes.length, order, waves, blockedNodes };
}
