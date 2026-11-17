import { assert } from './errors.js';
import * as Core from './core.js';
const c = new Core.LfuCache(3);
for (let i = 0;
i < 12;
i++) c.put(i % 4, i);
assert.equal(c.get(3) >= 0, true);
