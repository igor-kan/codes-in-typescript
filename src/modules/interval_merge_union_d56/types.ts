export type ClosedSpan = readonly [number, number];

export interface IntervalSummary {
  readonly spanCount: number;
  readonly totalMeasure: number;
}

export const MODULE_SLUG = "interval_merge_union_d56" as const;
