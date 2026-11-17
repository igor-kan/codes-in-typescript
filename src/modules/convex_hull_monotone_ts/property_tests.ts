import { assert } from './errors.js';
import * as Core from './core.js';
const h = Core.monotoneChainHull([{x:0,y:0},{x:4,y:0},{x:0,y:4}]);
assert.equal(h.length, 3);
