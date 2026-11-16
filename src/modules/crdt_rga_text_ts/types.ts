export interface OpId {
  readonly clock: number;
  readonly site: string;
}

export interface RgaNode {
  readonly id: OpId;
  readonly anchor: OpId | null;
  readonly ch: string;
  deleted: boolean;
}
