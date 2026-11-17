export class LfuCache {
  private readonly items = new Map<number, { val: number; freq: number }>();
  private readonly buckets = new Map<number, Set<number>>();
  private minFreq = 0;
  constructor(private readonly cap: number) {}
  public get(key: number): number {
    const e = this.items.get(key);
    if (!e) return -1;
    this.promote(key, e);
    return e.val;
  }
  public put(key: number, val: number): void {
    if (this.cap <= 0) return;
    const ex = this.items.get(key);
    if (ex) { ex.val = val; this.promote(key, ex); return; }
    if (this.items.size >= this.cap) {
      const b = this.buckets.get(this.minFreq)!;
      const victim = b.values().next().value!;
      b.delete(victim);
      this.items.delete(victim);
    }
    this.items.set(key, { val, freq: 1 });
    if (!this.buckets.has(1)) this.buckets.set(1, new Set());
    this.buckets.get(1)!.add(key);
    this.minFreq = 1;
  }
  private promote(key: number, e: { val: number; freq: number }): void {
    const cur = this.buckets.get(e.freq)!;
    cur.delete(key);
    if (cur.size === 0 && e.freq === this.minFreq) this.minFreq++;
    e.freq++;
    if (!this.buckets.has(e.freq)) this.buckets.set(e.freq, new Set());
    this.buckets.get(e.freq)!.add(key);
  }
}
