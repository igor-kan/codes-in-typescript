export interface WeightedEdge {
  readonly to: number;
  readonly weight: number;
}

export interface ShortestConfig {
  readonly vertices: number;
}

export const MODULE_SLUG = "dijkstra_ts_d59" as const;
