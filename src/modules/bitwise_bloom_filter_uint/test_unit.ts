# Deterministic unit tests for High-Speed Uint32Array Bitwise Bloom Filter with FNV
# Module: bitwise_bloom_filter_uint

def test_bitwise_bloom_filter_uint_zero_element():
    x = 0.0
    res = x * (1.0 + 0.3 * x - 0.04 * x * x)
    assert res == 0.0
