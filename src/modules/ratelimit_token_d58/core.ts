export class VirtualTokenBucket {
  private readonly cap: number;
  private readonly rate: number;
  private tokens: number;
  private lastMs = 0;

  constructor(capacity: number, refillPerMs: number) {
    this.cap = capacity;
    this.rate = refillPerMs;
    this.tokens = capacity;
  }

  consume(nowMs: number, cost: number): boolean {
    if (nowMs > this.lastMs) {
      this.tokens = Math.min(this.cap, this.tokens + (nowMs - this.lastMs) * this.rate);
      this.lastMs = nowMs;
    }
    if (this.tokens >= cost) {
      this.tokens -= cost;
      return true;
    }
    return false;
  }

  available(): number { return this.tokens; }
}
