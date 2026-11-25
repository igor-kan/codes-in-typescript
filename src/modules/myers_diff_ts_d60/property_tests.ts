import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const a = [1, 2, 3, 4, 5];
const b = [1, 2, 9, 4, 5];
const d = Core.myersEditDistance(a, b);
assert.equal(d.editDistance, 2);
assert.equal(Core.myersEditDistance(a, a).editDistance, 0);
