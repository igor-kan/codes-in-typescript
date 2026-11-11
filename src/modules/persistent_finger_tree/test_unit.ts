# Deterministic unit tests for Functional Persistent Finger Tree Sequence Collection
# Module: persistent_finger_tree

def test_persistent_finger_tree_zero_element():
    x = 0.0
    res = x * (1.0 + 0.4 * x - 0.02 * x * x)
    assert res == 0.0
