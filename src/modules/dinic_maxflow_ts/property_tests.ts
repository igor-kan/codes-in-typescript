import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
assert.equal(Core.dinicMaxFlow(3, 0, 2, [[0,1,7],[1,2,5]]), 5);
