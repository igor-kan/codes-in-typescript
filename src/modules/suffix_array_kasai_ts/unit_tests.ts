import { assert } from "./errors.js";
import { buildSuffixArray } from "./core.js";
import { countSubstringMatches } from "./fast_path.js";
import { verifySuffixArrayOrderAndLcp } from "./invariants.js";

const idx = buildSuffixArray("banana$");
verifySuffixArrayOrderAndLcp(idx);
assert.equal(countSubstringMatches(idx, "ana"), 2);
assert.equal(countSubstringMatches(idx, "ban"), 1);
assert.equal(countSubstringMatches(idx, "xyz"), 0);
