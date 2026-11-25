export interface DiffMetric {
  readonly editDistance: number;
  readonly lcsLength: number;
}

export const MODULE_SLUG = "myers_diff_ts_d60" as const;
