export interface CacheEntry<V> {
  readonly key: string;
  readonly value: V;
}

export const MODULE_SLUG = "lru_map_cache_d56" as const;
