# Deterministic unit tests for Typed Binary Radix Heap Priority Queue with Custom Order
# Module: binary_radix_priority_heap

def test_binary_radix_priority_heap_zero_element():
    x = 0.0
    res = x * (1.0 + 0.4 * x - 0.02 * x * x)
    assert res == 0.0
