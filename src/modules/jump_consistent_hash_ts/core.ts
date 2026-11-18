export function jumpConsistentHash(keyIn: bigint, numBuckets: number): number {
  let key = keyIn & 0xffffffffffffffffn;
  let b = -1n;
  let j = 0n;
  const nb = BigInt(numBuckets);
  while (j < nb) {
    b = j;
    key = (key * 2862933555777941757n + 1n) & 0xffffffffffffffffn;
    const denom = Number((key >> 33n) + 1n);
    j = BigInt(Math.floor((Number(b + 1n) * 2147483648.0) / denom));
  }
  return Number(b);
}
