import { TokenBucket } from "./core.js";
import { verifyTokenBounds } from "./invariants.js";

const tb = new TokenBucket({ capacity: 10, refillPerSec: 10 }, 0);
let granted = 0;
for (let ms = 0; ms < 1000; ms += 25) {
  if (tb.tryAcquire(1, ms).allowed) granted++;
  verifyTokenBounds(tb, 10);
}
if (granted > 21) throw new Error(`rate limit bypassed: granted=${granted}`);
