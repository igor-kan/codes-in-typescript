import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const m = Core.mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
assert.deepEqual(m, [[1, 6], [8, 10], [15, 18]]);
assert.equal(Core.coveredLength(m), 10);
