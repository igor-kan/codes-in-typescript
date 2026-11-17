import { assert } from './errors.js';
import { parallelCounts } from './concurrent.js';
parallelCounts(['aba', 'abba']).then(res => assert.deepEqual(res, [4, 6]));
