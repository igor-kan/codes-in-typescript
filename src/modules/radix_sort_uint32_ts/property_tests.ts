import { assert } from './errors.js';
import * as Core from './core.js';
const inp = Uint32Array.from({ length: 64 }, (_, i) => ((64 - i) * 65537) >>> 0);
const out = Core.radixSortU32(inp);
assert.equal(out[0] < out[63], true);
