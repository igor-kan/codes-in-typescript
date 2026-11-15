import { TokenBucket } from "./core.js";
import { validatePolicy } from "./interface.js";
import { verifyTokenBounds } from "./invariants.js";

const policy = { capacity: 5, refillPerSec: 2 };
validatePolicy(policy);
const tb = new TokenBucket(policy, 1000);
for (let i = 0; i < 5; i++) {
  if (!tb.tryAcquire(1, 1000).allowed) throw new Error("expected burst permit");
}
const deny = tb.tryAcquire(1, 1000);
if (deny.allowed || deny.retryAfterMs !== 500) throw new Error(`expected 500ms retry got ${deny.retryAfterMs}`);
const after = tb.tryAcquire(1, 1500);
if (!after.allowed) throw new Error("expected refill after 500ms");
verifyTokenBounds(tb, policy.capacity);
