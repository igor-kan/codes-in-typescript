import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const f = new Core.OrderFenwick(16); f.add(2, 3); f.add(5, 2); f.add(10, 4); assert.equal(f.kth(1), 2); assert.equal(f.kth(4), 5); assert.equal(f.kth(7), 10);
