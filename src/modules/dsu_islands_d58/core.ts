export class DisjointSet {
  private readonly parent: Int32Array;
  private readonly size: Int32Array;
  private comps: number;

  constructor(n: number) {
    this.parent = new Int32Array(n);
    this.size = new Int32Array(n);
    this.comps = n;
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  find(x: number): number {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  union(a: number, b: number): boolean {
    let ra = this.find(a);
    let rb = this.find(b);
    if (ra === rb) return false;
    if (this.size[ra] < this.size[rb]) { const t = ra; ra = rb; rb = t; }
    this.parent[rb] = ra;
    this.size[ra] += this.size[rb];
    this.comps--;
    return true;
  }

  components(): number { return this.comps; }
}
