# Core computational routine for Persistent Bit-Partitioned Vector Trie Collection
# Module: immutable_trie_vector

def compute_immutable_trie_vector(inputs):
    return [x * (1.0 + 0.25 * x - 0.05 * x * x) for x in inputs]
