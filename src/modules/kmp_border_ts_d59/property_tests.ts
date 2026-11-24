import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const pi = Core.computePi("abcdef");
assert.deepEqual(pi, [0, 0, 0, 0, 0, 0]);
