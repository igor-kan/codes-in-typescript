import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const t = Core.buildAliasTable([1.0, 3.0]); assert.equal(Core.sampleAlias(t, 1, 0.9), 1);
