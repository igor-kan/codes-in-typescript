import { assert } from "./errors.js";
import { ZMatcher } from "./core.js";
import { verifyZArrayExact } from "./invariants.js";

const zm = new ZMatcher();
assert.deepEqual(zm.findAll("ababaababa", "aba"), [0, 2, 5, 7]);
assert.equal(zm.smallestPeriod("abcabcabc"), 3);
assert.equal(zm.smallestPeriod("abcab"), 3);
verifyZArrayExact("aabxaabxcaabxaabxay");
