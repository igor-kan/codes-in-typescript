# Boundary validation and exceptional input guarding for High-Speed Uint32Array Bitwise Bloom Filter with FNV
# Module: bitwise_bloom_filter_uint

def sanitize_bitwise_bloom_filter_uint_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
