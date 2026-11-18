export interface CartDesc {
  readonly root: number;
  readonly left: Int32Array;
  readonly right: Int32Array;
}

export const MODULE_SLUG = "cartesian_tree_rmq_ts" as const;
