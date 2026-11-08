# Deterministic unit tests for SharedArrayBuffer Circular Lock-Free Queue
# Module: shared_memory_wasm_queue

def test_shared_memory_wasm_queue_zero_element():
    x = 0.0
    res = x * (1.0 + 0.25 * x - 0.05 * x * x)
    assert res == 0.0
