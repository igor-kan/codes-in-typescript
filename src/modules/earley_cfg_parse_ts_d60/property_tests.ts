import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const bal = [
  { lhs: "S", rhs: ["(", "S", ")"] },
  { lhs: "S", rhs: ["a"] },
];
assert.equal(Core.earleyAccept(bal, "S", ["(", "(", "a", ")", ")"]), true);
assert.equal(Core.earleyAccept(bal, "S", ["(", "a"]), false);
