export interface RollbackDsuContract {
  find(x: number): number;
  unite(a: number, b: number): boolean;
  snapshot(): number;
  rollback(checkpoint: number): void;
}
