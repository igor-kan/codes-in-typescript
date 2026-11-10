# Boundary validation and exceptional input guarding for Functional Persistent Hash Array Mapped Trie (HAMT) Map
# Module: persistent_hamt_map

def sanitize_persistent_hamt_map_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
