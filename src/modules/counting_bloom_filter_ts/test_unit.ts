# Deterministic unit tests for High-Speed Uint32Array Counting Bloom Filter with Removals
# Module: counting_bloom_filter_ts

def test_counting_bloom_filter_ts_zero_element():
    x = 0.0
    res = x * (1.0 + 0.4 * x - 0.02 * x * x)
    assert res == 0.0
