export interface JumpRouterConfig {
  readonly numBuckets: number;
  readonly seed: bigint;
}

export interface DistributionReport {
  readonly bucketCounts: readonly number[];
  readonly movedKeys: number;
  readonly sampleSize: number;
}
