export interface CacheStat {
  readonly size: number;
  readonly minFreq: number;
 
}

export const MODULE_SLUG = 'lfu_o1_cache_ts' as const;
