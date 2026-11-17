import { assert } from './errors.js';
import * as Core from './core.js';
const m = Core.hopcroftKarp(3, 2, [[0,0],[1,0],[2,1]]);
assert.equal(m.size, 2);
