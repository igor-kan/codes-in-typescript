const MASK_64 = 0xffffffffffffffffn;
const LCG_MULT = 2862933555777941757n;
const DIVISOR_32 = Number(1n << 31n);

export function jumpConsistentHash(key: bigint, numBuckets: number): number {
  let k = key & MASK_64;
  let b = -1;
  let j = 0;
  while (j < numBuckets) {
    b = j;
    k = (k * LCG_MULT + 1n) & MASK_64;
    const upper = Number((k >> 33n) + 1n);
    j = Math.floor(((b + 1) * DIVISOR_32) / upper);
  }
  return b;
}

export function routeWithSeed(seed: bigint, key: bigint, numBuckets: number): number {
  return jumpConsistentHash((key ^ seed) & MASK_64, numBuckets);
}
