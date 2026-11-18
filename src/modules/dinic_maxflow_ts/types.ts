export interface FlowEdge {
  to: number;
  rev: number;
  cap: number;
}

export const MODULE_SLUG = "dinic_maxflow_ts" as const;
