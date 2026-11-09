# Core computational routine for Functional Persistent 32-Way Bitmap Vector Trie
# Module: persistent_bitmap_vector

def compute_persistent_bitmap_vector(inputs):
    return [x * (1.0 + 0.3 * x - 0.04 * x * x) for x in inputs]
