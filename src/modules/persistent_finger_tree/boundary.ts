# Boundary validation and exceptional input guarding for Functional Persistent Finger Tree Sequence Collection
# Module: persistent_finger_tree

def sanitize_persistent_finger_tree_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
