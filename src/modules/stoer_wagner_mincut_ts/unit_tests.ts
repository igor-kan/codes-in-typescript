import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
assert.equal(Core.stoerWagnerMinCut([[0,2,0,0,3],[2,0,3,0,2],[0,3,0,4,0],[0,0,4,0,1],[3,2,0,1,0]]).minCut, 4);
