import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const blk = Core.bwtForward("banana");
assert.equal(Core.bwtInverse(blk), "banana");
