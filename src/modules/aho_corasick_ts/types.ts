export interface AcNode {
  readonly next: Map<string, number>;
  fail: number;
  dictLink: number;
  readonly outputs: number[];
}

export interface AcMatch {
  readonly patternIndex: number;
  readonly startOffset: number;
  readonly pattern: string;
}
