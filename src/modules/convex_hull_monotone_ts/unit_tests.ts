import { assert } from './errors.js';
import * as Core from './core.js';
const h = Core.monotoneChainHull([{x:0,y:0},{x:2,y:0},{x:2,y:2},{x:0,y:2},{x:1,y:1}]);
assert.equal(h.length, 4);
