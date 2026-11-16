import { RollbackDsuError, RollbackDsuErrorCode } from "./errors.js";
import { RollbackDsuContract } from "./interface.js";
import { UndoRecord } from "./types.js";

export class RollbackDSU implements RollbackDsuContract {
  public readonly n: number;
  public readonly parent: Int32Array;
  public readonly size: Int32Array;
  public components: number;
  private readonly history: UndoRecord[] = [];

  constructor(n: number) {
    if (!Number.isInteger(n) || n <= 0) {
      throw new RollbackDsuError(RollbackDsuErrorCode.INVALID_INPUT, "n must be > 0");
    }
    this.n = n;
    this.parent = new Int32Array(n);
    this.size = new Int32Array(n);
    this.components = n;
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  public find(x: number): number {
    if (x < 0 || x >= this.n) {
      throw new RollbackDsuError(RollbackDsuErrorCode.OUT_OF_BOUNDS, "vertex oob");
    }
    while (this.parent[x] !== x) {
      x = this.parent[x];
    }
    return x;
  }

  public unite(a: number, b: number): boolean {
    let ra = this.find(a);
    let rb = this.find(b);
    if (ra === rb) return false;
    if (this.size[ra] < this.size[rb]) {
      const tmp = ra; ra = rb; rb = tmp;
    }
    this.parent[rb] = ra;
    this.size[ra] += this.size[rb];
    this.components--;
    this.history.push({ childRoot: rb, parentRoot: ra });
    return true;
  }

  public snapshot(): number {
    return this.history.length;
  }

  public rollback(checkpoint: number): void {
    if (checkpoint < 0 || checkpoint > this.history.length) {
      throw new RollbackDsuError(RollbackDsuErrorCode.OUT_OF_BOUNDS, "invalid checkpoint");
    }
    while (this.history.length > checkpoint) {
      const rec = this.history.pop()!;
      this.parent[rec.childRoot] = rec.childRoot;
      this.size[rec.parentRoot] -= this.size[rec.childRoot];
      this.components++;
    }
  }
}
