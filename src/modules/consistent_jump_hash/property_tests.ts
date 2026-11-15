import { measureResizeChurn } from "./fast_path.js";
import { verifyMonotonicity } from "./invariants.js";

const keys = Array.from({ length: 500 }, (_, i) => BigInt(i * 7919 + 17));
for (let n = 2; n < 20; n++) {
  verifyMonotonicity(n, n + 1, keys);
}
const rep = measureResizeChurn(10, 10, 1000);
for (const c of rep.bucketCounts) {
  if (c < 60 || c > 140) throw new Error(`imbalanced bucket count ${c}`);
}
