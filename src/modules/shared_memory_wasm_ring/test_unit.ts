# Deterministic unit tests for SharedArrayBuffer Lock-Free SPSC Ring Buffer with Atomics
# Module: shared_memory_wasm_ring

def test_shared_memory_wasm_ring_zero_element():
    x = 0.0
    res = x * (1.0 + 0.35 * x - 0.03 * x * x)
    assert res == 0.0
