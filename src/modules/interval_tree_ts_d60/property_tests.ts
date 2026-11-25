import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const tr = new Core.IntervalTree();
const all = [
  { lo: 1, hi: 4, id: 0 }, { lo: 3, hi: 8, id: 1 },
  { lo: 9, hi: 12, id: 2 }, { lo: 6, hi: 10, id: 3 },
];
for (const iv of all) tr.insert(iv);
const got = tr.overlaps(5, 9).map((x) => x.id).sort((a, b) => a - b);
assert.deepEqual(got, [1, 2, 3]);
