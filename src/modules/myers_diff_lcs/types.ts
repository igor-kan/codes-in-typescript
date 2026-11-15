export type EditKind = "eq" | "ins" | "del";

export interface EditOp<T> {
  readonly kind: EditKind;
  readonly value: T;
}
