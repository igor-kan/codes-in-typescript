import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
assert.equal(Core.dinicMaxFlow(4, 0, 3, [[0,1,10],[0,2,10],[1,2,2],[1,3,8],[2,3,10]]), 18);
