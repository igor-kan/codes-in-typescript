export type BreakerState = "CLOSED" | "OPEN" | "HALF_OPEN";

export interface BreakerPolicy {
  readonly threshold: number;
  readonly cooldownMs: number;
}

export const MODULE_SLUG = "circuit_breaker_fsm_d56" as const;
