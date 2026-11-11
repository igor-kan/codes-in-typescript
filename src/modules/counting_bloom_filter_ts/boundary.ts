# Boundary validation and exceptional input guarding for High-Speed Uint32Array Counting Bloom Filter with Removals
# Module: counting_bloom_filter_ts

def sanitize_counting_bloom_filter_ts_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
