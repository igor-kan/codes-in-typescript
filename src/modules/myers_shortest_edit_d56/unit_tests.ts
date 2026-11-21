import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
assert.equal(Core.myersEditDistance(["a", "b", "c"], ["a", "x", "c", "d"]), 3);
assert.equal(Core.myersEditDistance(["x", "y"], ["x", "y"]), 0);
