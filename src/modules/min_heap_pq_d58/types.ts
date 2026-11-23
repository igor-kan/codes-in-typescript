export interface HeapComparator<T> {
  (a: T, b: T): number;
}

export interface HeapMetrics {
  readonly size: number;
}

export const MODULE_SLUG = "min_heap_pq_d58" as const;
