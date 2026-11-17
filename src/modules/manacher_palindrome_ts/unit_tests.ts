import { ManacherEngine } from './core.js';
import { verifyPalinOracle } from './invariants.js';
const e = new ManacherEngine();
verifyPalinOracle('babad', e.analyze('babad'));
verifyPalinOracle('cbbd', e.analyze('cbbd'));
