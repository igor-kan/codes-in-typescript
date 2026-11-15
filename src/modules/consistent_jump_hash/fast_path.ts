import { jumpConsistentHash } from "./core.js";
import { DistributionReport } from "./types.js";

export function measureResizeChurn(oldN: number, newN: number, sampleSize: number): DistributionReport {
  const counts = new Array<number>(newN).fill(0);
  let moved = 0;
  for (let i = 0; i < sampleSize; i++) {
    const k = BigInt(i) * 0x9e3779b97f4a7c15n;
    const b1 = jumpConsistentHash(k, oldN);
    const b2 = jumpConsistentHash(k, newN);
    counts[b2]++;
    if (b1 !== b2) moved++;
  }
  return { bucketCounts: counts, movedKeys: moved, sampleSize };
}
