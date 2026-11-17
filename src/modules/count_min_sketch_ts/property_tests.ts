import { assert } from './errors.js';
import * as Core from './core.js';
const c = new Core.ConservativeCMS(4, 64);
c.add(7, 12);
assert.equal(c.estimate(7) >= 12, true);
