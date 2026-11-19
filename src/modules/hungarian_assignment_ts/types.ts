export interface AssignRes {
  readonly cost: number;
  readonly assign: readonly number[];
}

export const MODULE_SLUG = "hungarian_assignment_ts" as const;
