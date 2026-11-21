import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
let threw = false;
try { Core.resolveBuildOrder(["x", "y"], [["x", "y"], ["y", "x"]]); } catch { threw = true; }
assert.equal(threw, true);
