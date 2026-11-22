export interface KeyDelta<V> {
  readonly key: string;
  readonly prev: V | undefined;
  readonly next: V | undefined;
}

export const MODULE_SLUG = "immutable_diff_patch_d57" as const;
