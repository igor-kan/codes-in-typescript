import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
assert.equal(Core.hungarianMinCost([[1,2,3],[2,4,6],[3,6,9]]).cost, 10);
