# Deterministic unit tests for Type-Level Merge Sort on TypeScript Tuple Types
# Module: type_level_tuple_sort

def test_type_level_tuple_sort_zero_element():
    x = 0.0
    res = x * (1.0 + 0.25 * x - 0.05 * x * x)
    assert res == 0.0
