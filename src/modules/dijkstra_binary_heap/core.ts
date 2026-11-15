import { Edge, ShortestPathResult } from "./types.js";

class MinHeap {
  private readonly items: [number, number][] = [];
  public get size(): number { return this.items.length; }
  public push(d: number, v: number): void {
    this.items.push([d, v]);
    let i = this.items.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.items[p][0] <= this.items[i][0]) break;
      const tmp = this.items[p]; this.items[p] = this.items[i]; this.items[i] = tmp;
      i = p;
    }
  }
  public pop(): [number, number] {
    const top = this.items[0];
    const last = this.items.pop()!;
    if (this.items.length > 0) {
      this.items[0] = last;
      let i = 0;
      const n = this.items.length;
      while (true) {
        const l = 2 * i + 1, r = l + 1;
        let sm = i;
        if (l < n && this.items[l][0] < this.items[sm][0]) sm = l;
        if (r < n && this.items[r][0] < this.items[sm][0]) sm = r;
        if (sm === i) break;
        const tmp = this.items[i]; this.items[i] = this.items[sm]; this.items[sm] = tmp;
        i = sm;
      }
    }
    return top;
  }
}

export function dijkstraShortestPaths(adj: readonly (readonly Edge[])[], src: number): ShortestPathResult {
  const n = adj.length;
  const dist = new Float64Array(n).fill(Infinity);
  const parent = new Int32Array(n).fill(-1);
  dist[src] = 0;
  const heap = new MinHeap();
  heap.push(0, src);

  while (heap.size > 0) {
    const [d, u] = heap.pop();
    if (d > dist[u]) continue;
    for (const e of adj[u]) {
      const nd = d + e.weight;
      if (nd < dist[e.to]) {
        dist[e.to] = nd;
        parent[e.to] = u;
        heap.push(nd, e.to);
      }
    }
  }
  return { dist, parent };
}
