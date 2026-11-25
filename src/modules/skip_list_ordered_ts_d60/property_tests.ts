import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const sl = new Core.SkipListMap();
for (const k of [40, 5, 18, 22, 1, 18]) sl.set(k, `v${k}`);
const keys = sl.entries().map((e) => e.key);
assert.deepEqual(keys, [1, 5, 18, 22, 40]);
