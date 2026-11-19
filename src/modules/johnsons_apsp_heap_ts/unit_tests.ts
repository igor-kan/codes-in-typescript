import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const d = Core.johnsonApsp(4, [{u:0,v:1,w:4},{u:0,v:2,w:5},{u:1,v:2,w:-3},{u:2,v:3,w:2}]); assert.equal(d[0][3], 3); assert.equal(d[1][3], -1);
