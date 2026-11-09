# Boundary validation and exceptional input guarding for Functional Persistent 32-Way Bitmap Vector Trie
# Module: persistent_bitmap_vector

def sanitize_persistent_bitmap_vector_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
