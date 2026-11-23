import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const tb = new Core.VirtualTokenBucket(10, 0.5);
assert.equal(tb.consume(0, 8), true);
assert.equal(tb.consume(0, 5), false);
assert.equal(tb.consume(6, 5), true);
