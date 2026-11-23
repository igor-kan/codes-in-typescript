import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const d = new Core.DisjointSet(3);
d.union(0, 1); d.union(1, 2);
assert.equal(d.find(0), d.find(2));
