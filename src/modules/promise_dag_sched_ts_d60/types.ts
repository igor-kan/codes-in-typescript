export interface TaskNode {
  readonly id: number;
  readonly duration: number;
  readonly deps: readonly number[];
}

export const MODULE_SLUG = "promise_dag_sched_ts_d60" as const;
