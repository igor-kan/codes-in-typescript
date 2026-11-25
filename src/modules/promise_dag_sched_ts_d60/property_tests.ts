import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const p = Core.criticalPathSchedule([
  { id: 0, duration: 4, deps: [] },
  { id: 1, duration: 4, deps: [0] },
]);
assert.deepEqual(p.slack, [0, 0]);
