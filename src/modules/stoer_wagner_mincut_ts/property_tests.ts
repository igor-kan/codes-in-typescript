import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
assert.equal(Core.stoerWagnerMinCut([[0,10,0],[10,0,2],[0,2,0]]).minCut, 2);
