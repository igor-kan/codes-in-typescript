import { TokenBucket } from "./core.js";

export function burstDrainCount(bucket: TokenBucket, nowMs: number): number {
  let ok = 0;
  while (bucket.tryAcquire(1, nowMs).allowed) ok++;
  return ok;
}
