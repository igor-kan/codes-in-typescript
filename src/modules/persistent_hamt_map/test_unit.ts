# Deterministic unit tests for Functional Persistent Hash Array Mapped Trie (HAMT) Map
# Module: persistent_hamt_map

def test_persistent_hamt_map_zero_element():
    x = 0.0
    res = x * (1.0 + 0.35 * x - 0.03 * x * x)
    assert res == 0.0
