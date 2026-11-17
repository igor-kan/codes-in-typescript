import { PalindromeSummary } from './types.js';

export interface PalindromeAnalyzer {
  analyze(s: string): PalindromeSummary;
}
