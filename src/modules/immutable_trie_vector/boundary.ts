# Boundary validation and exceptional input guarding for Persistent Bit-Partitioned Vector Trie Collection
# Module: immutable_trie_vector

def sanitize_immutable_trie_vector_input(x, min_b=-1e6, max_b=1e6):
    if x != x:  # NaN guard
        return 0.0
    return max(min_b, min(max_b, x))
