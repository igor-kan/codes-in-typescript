export class CuckooFilter {
  private readonly mask: number;
  private readonly table: Uint8Array;
  constructor(bucketsPow2: number) {
    this.mask = bucketsPow2 - 1;
    this.table = new Uint8Array(bucketsPow2 * 4);
  }
  private fpIdx(key: number): [number, number, number] {
    const h = Math.imul(key ^ (key >>> 16), 0x85ebca6b) >>> 0;
    const fp = ((h >>> 16) & 0xff) | 1;
    const i1 = h & this.mask;
    const i2 = (i1 ^ Math.imul(fp, 0x5bd1e995)) & this.mask;
    return [fp, i1, i2];
  }
  public insert(key: number): boolean {
    const [fp, i1, i2] = this.fpIdx(key);
    for (const idx of [i1, i2]) {
      for (let s = 0; s < 4; s++) {
        if (this.table[idx * 4 + s] === 0) {
          this.table[idx * 4 + s] = fp;
          return true;
        }
      }
    }
    return false;
  }
  public lookup(key: number): boolean {
    const [fp, i1, i2] = this.fpIdx(key);
    for (const idx of [i1, i2]) {
      for (let s = 0; s < 4; s++) if (this.table[idx * 4 + s] === fp) return true;
    }
    return false;
  }
}
