import { fastArraySum } from './fast_path.js';

export async function parallelBatchSum(xs: number[]): Promise<number> {
  const half = xs.length >> 1;
  const [a, b] = await Promise.all([Promise.resolve(fastArraySum(xs.slice(0, half))), Promise.resolve(fastArraySum(xs.slice(half)))]);
  return a + b;
}
