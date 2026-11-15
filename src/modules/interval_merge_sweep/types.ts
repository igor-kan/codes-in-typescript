export interface Span {
  readonly start: number;
  readonly end: number;
}

export interface OccupancyPeak {
  readonly at: number;
  readonly count: number;
}
