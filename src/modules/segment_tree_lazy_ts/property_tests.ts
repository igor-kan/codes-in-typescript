import { assert } from './errors.js';
import * as Core from './core.js';
const st = new Core.LazySegTree(10);
st.add(0, 9, 4);
assert.equal(st.sum(0, 9), 40);
