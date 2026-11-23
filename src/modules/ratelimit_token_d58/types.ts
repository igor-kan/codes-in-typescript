export interface BucketSpec {
  readonly capacity: number;
  readonly refillPerMs: number;
  readonly initialTokens: number;
}

export const MODULE_SLUG = "ratelimit_token_d58" as const;
