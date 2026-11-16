import { OpId, RgaNode } from "./types.js";

export interface SequenceCrdtContract {
  insertLocal(afterPos: number, ch: string): RgaNode;
  deleteAt(visiblePos: number): OpId | null;
  applyRemote(node: RgaNode): void;
  toText(): string;
}
