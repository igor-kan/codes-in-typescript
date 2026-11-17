import { assert } from './errors.js';
import * as Core from './core.js';
const out = Core.radixSortU32(new Uint32Array([0xffffffff, 5, 0, 99999, 42]));
assert.deepEqual(Array.from(out), [0, 5, 42, 99999, 0xffffffff]);
