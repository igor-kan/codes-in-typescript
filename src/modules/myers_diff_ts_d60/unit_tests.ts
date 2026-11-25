import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const m1 = Core.myersEditDistance(["a", "b", "c", "a", "b", "b", "a"], ["c", "b", "a", "b", "a", "c"]);
assert.equal(m1.editDistance, 5);
assert.equal(m1.lcsLength, 4);
