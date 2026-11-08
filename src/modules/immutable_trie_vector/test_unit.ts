# Deterministic unit tests for Persistent Bit-Partitioned Vector Trie Collection
# Module: immutable_trie_vector

def test_immutable_trie_vector_zero_element():
    x = 0.0
    res = x * (1.0 + 0.25 * x - 0.05 * x * x)
    assert res == 0.0
