export interface LwwStamp<T> {
  readonly value: T | null;
  readonly ts: number;
  readonly actor: string;
}

export const MODULE_SLUG = "crdt_lww_map_d56" as const;
