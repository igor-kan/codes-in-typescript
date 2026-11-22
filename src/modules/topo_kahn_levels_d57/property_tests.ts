import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const solo = Core.scheduleDagWaves(["x", "y"], []);
assert.deepEqual(solo, [["x", "y"]]);
