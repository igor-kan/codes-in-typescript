import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
assert.deepEqual(Core.computePi("ababa"), [0, 0, 1, 2, 3]);
assert.equal(Core.kmpFirstMatch("abxabcabcaby", "abcaby"), 6);
