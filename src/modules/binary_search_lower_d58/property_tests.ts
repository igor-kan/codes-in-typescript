import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const r = Core.equalRange([10, 20, 30], 15);
assert.deepEqual(r, { lower: 1, upper: 1, count: 0 });
