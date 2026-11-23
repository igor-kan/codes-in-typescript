import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const pq = new Core.BinaryHeap<number>((a, b) => a - b);
for (const x of [9, 2, 7, 1, 5]) pq.push(x);
const out: number[] = [];
while (pq.size() > 0) out.push(pq.pop() as number);
assert.deepEqual(out, [1, 2, 5, 7, 9]);
