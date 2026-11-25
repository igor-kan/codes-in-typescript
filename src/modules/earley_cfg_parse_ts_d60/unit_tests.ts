import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const grammar = [
  { lhs: "E", rhs: ["E", "+", "T"] },
  { lhs: "E", rhs: ["T"] },
  { lhs: "T", rhs: ["n"] },
];
assert.equal(Core.earleyAccept(grammar, "E", ["n", "+", "n", "+", "n"]), true);
assert.equal(Core.earleyAccept(grammar, "E", ["n", "+"]), false);
