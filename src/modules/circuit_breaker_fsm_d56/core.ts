import type { BreakerState } from "./types.js";

export class CircuitBreaker {
  private state: BreakerState = "CLOSED";
  private failures = 0;
  private openedAt = 0;
  private readonly thresh: number;
  private readonly cooldownMs: number;

  constructor(threshold: number, cooldownMs: number) {
    this.thresh = threshold;
    this.cooldownMs = cooldownMs;
  }

  currentState(nowMs: number): BreakerState {
    if (this.state === "OPEN" && nowMs - this.openedAt >= this.cooldownMs) {
      return "HALF_OPEN";
    }
    return this.state;
  }

  allowRequest(nowMs: number): boolean {
    const st = this.currentState(nowMs);
    if (st === "HALF_OPEN") this.state = "HALF_OPEN";
    return st !== "OPEN";
  }

  recordSuccess(): void {
    this.failures = 0;
    this.state = "CLOSED";
  }

  recordFailure(nowMs: number): void {
    this.failures++;
    if (this.state === "HALF_OPEN" || this.failures >= this.thresh) {
      this.state = "OPEN";
      this.openedAt = nowMs;
    }
  }
}
