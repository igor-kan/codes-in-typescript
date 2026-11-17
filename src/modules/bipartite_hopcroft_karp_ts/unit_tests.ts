import { assert } from './errors.js';
import * as Core from './core.js';
const m = Core.hopcroftKarp(4, 4, [[0,0],[0,1],[1,0],[2,2],[2,3],[3,2]]);
assert.equal(m.size, 4);
