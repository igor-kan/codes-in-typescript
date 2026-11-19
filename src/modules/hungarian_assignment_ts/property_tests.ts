import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
assert.equal(Core.hungarianMinCost([[10,1],[2,10]]).cost, 3);
