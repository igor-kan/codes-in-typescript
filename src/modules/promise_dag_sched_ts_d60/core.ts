import { TaskNode } from "./types.js";

export interface ScheduleWindow {
  readonly makespan: number;
  readonly slack: readonly number[];
}

export function criticalPathSchedule(tasks: readonly TaskNode[]): ScheduleWindow {
  const n = tasks.length;
  const es = new Array<number>(n).fill(0);
  const ef = new Array<number>(n).fill(0);
  const adj: number[][] = Array.from({ length: n }, () => []);
  const indeg = new Array<number>(n).fill(0);
  for (const t of tasks) {
    for (const d of t.deps) { adj[d].push(t.id); indeg[t.id]++; }
  }
  const q: number[] = [];
  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);
  const topo: number[] = [];
  for (let h = 0; h < q.length; h++) {
    const u = q[h];
    topo.push(u);
    ef[u] = es[u] + tasks[u].duration;
    for (const v of adj[u]) {
      es[v] = Math.max(es[v], ef[u]);
      if (--indeg[v] === 0) q.push(v);
    }
  }
  const makespan = ef.reduce((a, b) => Math.max(a, b), 0);
  const ls = new Array<number>(n).fill(makespan);
  const lf = new Array<number>(n).fill(makespan);
  for (let idx = topo.length - 1; idx >= 0; idx--) {
    const u = topo[idx];
    for (const v of adj[u]) lf[u] = Math.min(lf[u], ls[v]);
    ls[u] = lf[u] - tasks[u].duration;
  }
  const slack = es.map((s, i) => ls[i] - s);
  return { makespan, slack };
}
