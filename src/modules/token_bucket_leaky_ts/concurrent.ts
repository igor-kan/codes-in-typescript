import { TokenBucket } from "./core.js";
import { AdmissionDecision } from "./types.js";

export async function processConcurrentRequests(bucket: TokenBucket, timestamps: readonly number[]): Promise<AdmissionDecision[]> {
  const sorted = [...timestamps].sort((a, b) => a - b);
  return sorted.map((ts) => bucket.tryAcquire(1, ts));
}
