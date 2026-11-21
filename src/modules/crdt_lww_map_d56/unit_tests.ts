import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const a = { k: { value: "v1", ts: 10, actor: "n1" } };
const b = { k: { value: "v2", ts: 12, actor: "n2" }, m: { value: "x", ts: 5, actor: "n1" } };
const m = Core.mergeLwwMaps(a, b);
assert.equal(m.k.value, "v2");
assert.equal(m.m.value, "x");
