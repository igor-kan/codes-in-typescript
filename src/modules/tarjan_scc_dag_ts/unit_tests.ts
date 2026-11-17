import { assert } from './errors.js';
import * as Core from './core.js';
const r = Core.tarjanScc(4, [[0,1],[1,2],[2,0],[2,3]]);
assert.equal(r.count, 2);
assert.equal(r.comp[0], r.comp[2]);
