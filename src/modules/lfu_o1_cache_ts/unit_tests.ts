import { assert } from './errors.js';
import * as Core from './core.js';
const c = new Core.LfuCache(2);
c.put(1, 10);
c.put(2, 20);
assert.equal(c.get(1), 10);
c.put(3, 30);
assert.equal(c.get(2), -1);
assert.equal(c.get(1), 10);
