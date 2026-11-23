import type { HeapComparator } from "./types.js";

export class BinaryHeap<T> {
  private readonly data: T[] = [];
  private readonly cmp: HeapComparator<T>;

  constructor(cmp: HeapComparator<T>) {
    this.cmp = cmp;
  }

  size(): number { return this.data.length; }

  push(item: T): void {
    this.data.push(item);
    let i = this.data.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.cmp(this.data[i], this.data[p]) < 0) {
        const tmp = this.data[i]; this.data[i] = this.data[p]; this.data[p] = tmp;
        i = p;
      } else break;
    }
  }

  pop(): T | undefined {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop() as T;
    if (this.data.length > 0) {
      this.data[0] = last;
      let i = 0;
      const n = this.data.length;
      while (true) {
        let best = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < n && this.cmp(this.data[l], this.data[best]) < 0) best = l;
        if (r < n && this.cmp(this.data[r], this.data[best]) < 0) best = r;
        if (best === i) break;
        const tmp = this.data[i]; this.data[i] = this.data[best]; this.data[best] = tmp;
        i = best;
      }
    }
    return top;
  }
}
