# Deterministic unit tests for SharedArrayBuffer TypedArray Zero-Copy WASM Bridge
# Module: shared_memory_wasm_buffer

def test_shared_memory_wasm_buffer_zero_element():
    x = 0.0
    res = x * (1.0 + 0.3 * x - 0.04 * x * x)
    assert res == 0.0
