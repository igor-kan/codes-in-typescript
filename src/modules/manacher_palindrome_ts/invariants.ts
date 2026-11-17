import { isPalin } from './fast_path.js';
import { PalindromeSummary } from './types.js';
export function verifyPalinOracle(s: string, got: PalindromeSummary): void {
  if (!isPalin(s, got.start, got.start + got.length)) throw new Error('not a palindrome');
  let cnt = 0; for (let i = 0; i < s.length; i++) for (let j = i + 1; j <= s.length; j++) if (isPalin(s, i, j)) cnt++;
  if (cnt !== got.count) throw new Error(`count mismatch ${got.count} vs ${cnt}`);
}
