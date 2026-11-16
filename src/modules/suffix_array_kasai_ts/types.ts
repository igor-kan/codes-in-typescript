export interface SuffixIndex {
  readonly text: string;
  readonly sa: Int32Array;
  readonly lcp: Int32Array;
}
