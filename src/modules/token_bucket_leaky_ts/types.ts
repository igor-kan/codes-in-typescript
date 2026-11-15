export interface BucketPolicy {
  readonly capacity: number;
  readonly refillPerSec: number;
}

export interface AdmissionDecision {
  readonly allowed: boolean;
  readonly remainingTokens: number;
  readonly retryAfterMs: number;
}
