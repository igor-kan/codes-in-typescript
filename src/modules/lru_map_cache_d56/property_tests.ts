import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const c = new Core.LruCache<number>(3);
for (let i = 0; i < 12; i++) c.put(`k${i % 5}`, i);
assert.equal(c.size() <= 3, true);
