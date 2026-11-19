import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const st = new Core.ZkwSegTree(6); for (let i = 0; i < 6; i++) st.set(i, (i + 1) * 10); assert.equal(st.query(1, 4), 140);
