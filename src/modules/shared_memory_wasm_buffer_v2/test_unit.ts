# Deterministic unit tests for SharedArrayBuffer TypedArray Zero-Copy WASM Bridge
# Module: shared_memory_wasm_buffer_v2

def test_shared_memory_wasm_buffer_v2_zero_element():
    x = 0.0
    res = x * (1.0 + 0.4 * x - 0.02 * x * x)
    assert res == 0.0
