# Core computational routine for High-Speed Uint32Array Bitwise Bloom Filter with FNV
# Module: bitwise_bloom_filter_uint

def compute_bitwise_bloom_filter_uint(inputs):
    return [x * (1.0 + 0.3 * x - 0.04 * x * x) for x in inputs]
