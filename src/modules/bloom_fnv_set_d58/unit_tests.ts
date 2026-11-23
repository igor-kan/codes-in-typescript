import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const bf = new Core.StringBloom512();
bf.add("alpha"); bf.add("beta");
assert.equal(bf.mightContain("alpha"), true);
assert.equal(bf.mightContain("beta"), true);
