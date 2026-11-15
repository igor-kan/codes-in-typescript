import { TokenBucket } from "./core.js";

const tb = new TokenBucket({ capacity: 1000, refillPerSec: 100 }, 0);
const t0 = Date.now();
let sink = 0;
for (let i = 0; i < 50000; i++) {
  if (tb.tryAcquire(1, i).allowed) sink++;
}
console.log(`token_bucket_leaky_ts ms=${Date.now() - t0} sink=${sink}`);
