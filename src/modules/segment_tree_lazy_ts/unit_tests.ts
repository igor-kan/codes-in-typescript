import { assert } from './errors.js';
import * as Core from './core.js';
const st = new Core.LazySegTree(8);
st.add(1, 4, 3);
st.add(3, 6, 2);
assert.equal(st.sum(2, 5), 15);
