import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const s = { a: 1, b: 2 };
const t = { a: 1, c: 3 };
const d = Core.diffRecords(s, t);
assert.deepEqual(Core.applyPatch(s, d), t);
assert.deepEqual(Core.applyPatch(t, d, true), s);
