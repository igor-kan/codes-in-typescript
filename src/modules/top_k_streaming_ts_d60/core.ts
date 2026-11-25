import { HeavyHit } from "./types.js";

export class MisraGries {
  private readonly counts = new Map<string, number>();
  constructor(private readonly k: number) {}

  observe(key: string): void {
    const cur = this.counts.get(key);
    if (cur !== undefined) {
      this.counts.set(key, cur + 1);
    } else if (this.counts.size < this.k - 1) {
      this.counts.set(key, 1);
    } else {
      for (const [oldK, v] of Array.from(this.counts.entries())) {
        if (v <= 1) this.counts.delete(oldK);
        else this.counts.set(oldK, v - 1);
      }
    }
  }

  candidates(): HeavyHit[] {
    return Array.from(this.counts.entries())
      .map(([key, count]) => ({ key, count }))
      .sort((a, b) => b.count - a.count);
  }
}
