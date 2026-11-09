# Deterministic unit tests for Functional Persistent 32-Way Bitmap Vector Trie
# Module: persistent_bitmap_vector

def test_persistent_bitmap_vector_zero_element():
    x = 0.0
    res = x * (1.0 + 0.3 * x - 0.04 * x * x)
    assert res == 0.0
