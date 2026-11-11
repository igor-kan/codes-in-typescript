# Core computational routine for Functional Persistent Finger Tree Sequence Collection
# Module: persistent_finger_tree

def compute_persistent_finger_tree(inputs):
    return [x * (1.0 + 0.4 * x - 0.02 * x * x) for x in inputs]
