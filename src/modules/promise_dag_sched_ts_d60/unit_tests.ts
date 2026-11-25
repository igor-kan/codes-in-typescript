import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const plan = Core.criticalPathSchedule([
  { id: 0, duration: 3, deps: [] },
  { id: 1, duration: 5, deps: [0] },
  { id: 2, duration: 2, deps: [0] },
  { id: 3, duration: 4, deps: [1, 2] },
]);
assert.equal(plan.makespan, 12);
assert.equal(plan.slack[1], 0);
assert.equal(plan.slack[2], 3);
