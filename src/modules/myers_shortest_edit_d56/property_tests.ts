import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const x = ["line1", "line2", "line3"];
const y = ["line1", "line3", "line4"];
assert.equal(Core.myersEditDistance(x, y), Core.myersEditDistance(y, x));
