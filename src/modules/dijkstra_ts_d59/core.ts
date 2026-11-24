import type { WeightedEdge } from "./types.js";

export function dijkstraTs(n: number, src: number, adj: ReadonlyArray<ReadonlyArray<WeightedEdge>>): number[] {
  const dist = Array<number>(n).fill(Infinity);
  dist[src] = 0;
  const heap: Array<[number, number]> = [[0, src]];
  const push = (item: [number, number]): void => {
    heap.push(item);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[i][0] < heap[p][0]) {
        const tmp = heap[i]; heap[i] = heap[p]; heap[p] = tmp;
        i = p;
      } else break;
    }
  };
  const pop = (): [number, number] => {
    const top = heap[0];
    const last = heap.pop() as [number, number];
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let b = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l][0] < heap[b][0]) b = l;
        if (r < heap.length && heap[r][0] < heap[b][0]) b = r;
        if (b === i) break;
        const tmp = heap[i]; heap[i] = heap[b]; heap[b] = tmp;
        i = b;
      }
    }
    return top;
  };
  while (heap.length > 0) {
    const [d, u] = pop();
    if (d > dist[u]) continue;
    for (const e of adj[u]) {
      const nd = d + e.weight;
      if (nd < dist[e.to]) { dist[e.to] = nd; push([nd, e.to]); }
    }
  }
  return dist;
}
