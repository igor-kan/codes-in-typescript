export class ConservativeCMS {
  private readonly table: Uint32Array;
  constructor(private readonly depth: number, private readonly width: number) {
    this.table = new Uint32Array(depth * width);
  }
  private hash(key: number, seed: number): number {
    let x = (key ^ (seed * 0x9e3779b1)) >>> 0;
    x = Math.imul(x ^ (x >>> 16), 0x85ebca6b) >>> 0;
    x = Math.imul(x ^ (x >>> 13), 0xc2b2ae35) >>> 0;
    return (x ^ (x >>> 16)) % this.width;
  }
  public add(key: number, delta = 1): void {
    const idxs: number[] = [];
    let mn = 0xffffffff;
    for (let d = 0; d < this.depth; d++) {
      const idx = d * this.width + this.hash(key, d + 1);
      idxs.push(idx);
      if (this.table[idx] < mn) mn = this.table[idx];
    }
    const target = mn + delta;
    for (const idx of idxs) if (this.table[idx] < target) this.table[idx] = target;
  }
  public estimate(key: number): number {
    let mn = 0xffffffff;
    for (let d = 0; d < this.depth; d++) {
      const v = this.table[d * this.width + this.hash(key, d + 1)];
      if (v < mn) mn = v;
    }
    return mn;
  }
}
