export interface UndoRecord {
  readonly childRoot: number;
  readonly parentRoot: number;
}

export interface DsuSummary {
  readonly components: number;
  readonly historyDepth: number;
}
