export interface HuffmanTable {
  readonly codeMap: Readonly<Record<string, string>>;
  readonly bitLen: number;
}

export const MODULE_SLUG = "huffman_codes_ts_d59" as const;
