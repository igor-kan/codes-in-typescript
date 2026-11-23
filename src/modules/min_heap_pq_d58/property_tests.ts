import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const maxPq = new Core.BinaryHeap<number>((a, b) => b - a);
maxPq.push(3); maxPq.push(10); maxPq.push(5);
assert.equal(maxPq.pop(), 10);
