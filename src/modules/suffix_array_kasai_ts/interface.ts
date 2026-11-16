import { SuffixIndex } from "./types.js";

export interface SuffixQueryContract {
  countOccurrences(idx: SuffixIndex, pattern: string): number;
}
