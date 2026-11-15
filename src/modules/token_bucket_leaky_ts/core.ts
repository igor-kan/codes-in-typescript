import { AdmissionDecision, BucketPolicy } from "./types.js";

export class TokenBucket {
  private readonly policy: BucketPolicy;
  private tokens: number;
  private lastTsMs: number;

  constructor(policy: BucketPolicy, initialTsMs: number = 0) {
    this.policy = policy;
    this.tokens = policy.capacity;
    this.lastTsMs = initialTsMs;
  }

  public refillTo(nowMs: number): void {
    if (nowMs > this.lastTsMs) {
      const elapsedSec = (nowMs - this.lastTsMs) / 1000.0;
      this.tokens = Math.min(this.policy.capacity, this.tokens + elapsedSec * this.policy.refillPerSec);
      this.lastTsMs = nowMs;
    }
  }

  public tryAcquire(cost: number, nowMs: number): AdmissionDecision {
    this.refillTo(nowMs);
    if (this.tokens >= cost) {
      this.tokens -= cost;
      return { allowed: true, remainingTokens: this.tokens, retryAfterMs: 0 };
    }
    const deficit = cost - this.tokens;
    const waitMs = Math.ceil((deficit / this.policy.refillPerSec) * 1000.0);
    return { allowed: false, remainingTokens: this.tokens, retryAfterMs: waitMs };
  }

  public snapshotTokens(): number {
    return this.tokens;
  }
}
