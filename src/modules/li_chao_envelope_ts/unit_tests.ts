import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const lc = new Core.LiChaoTree(64); lc.addLine(2, 10); lc.addLine(-1, 50); lc.addLine(0, 25); assert.equal(lc.query(5), 20); assert.equal(lc.query(40), 10);
