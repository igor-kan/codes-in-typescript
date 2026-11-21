import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const cb = new Core.CircuitBreaker(3, 50);
cb.recordFailure(0);
assert.equal(cb.currentState(10), "CLOSED");
