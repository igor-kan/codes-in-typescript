import { assert } from './errors.js';
import * as Core from './core.js';
const c = new Core.ConservativeCMS(4, 128);
for (let i = 0;
i < 30;
i++) c.add(42);
assert.equal(c.estimate(42) >= 30, true);
