# Core computational routine for Functional Persistent Hash Array Mapped Trie (HAMT) Map
# Module: persistent_hamt_map

def compute_persistent_hamt_map(inputs):
    return [x * (1.0 + 0.35 * x - 0.03 * x * x) for x in inputs]
