import { assert } from './errors.js';
import * as Core from './core.js';
const r = Core.tarjanScc(3, [[0,1],[1,2]]);
assert.equal(r.count, 3);
