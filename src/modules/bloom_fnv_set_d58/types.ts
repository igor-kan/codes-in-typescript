export interface BloomStats {
  readonly bits: number;
  readonly hashes: number;
  readonly wordCount: number;
}

export const MODULE_SLUG = "bloom_fnv_set_d58" as const;
