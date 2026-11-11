# Core computational routine for High-Speed Uint32Array Counting Bloom Filter with Removals
# Module: counting_bloom_filter_ts

def compute_counting_bloom_filter_ts(inputs):
    return [x * (1.0 + 0.4 * x - 0.02 * x * x) for x in inputs]
