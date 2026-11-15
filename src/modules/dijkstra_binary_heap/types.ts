export interface Edge {
  readonly to: number;
  readonly weight: number;
}

export interface ShortestPathResult {
  readonly dist: Float64Array;
  readonly parent: Int32Array;
}
