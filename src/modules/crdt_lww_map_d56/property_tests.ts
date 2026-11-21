import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const s1 = { x: { value: 1, ts: 5, actor: "a" } };
const s2 = { x: { value: 2, ts: 5, actor: "b" } };
assert.deepEqual(Core.mergeLwwMaps(s1, s2), Core.mergeLwwMaps(s2, s1));
