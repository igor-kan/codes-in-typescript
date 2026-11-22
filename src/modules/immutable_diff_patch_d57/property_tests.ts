import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const x = { k: 10 };
assert.deepEqual(Core.diffRecords(x, x), []);
