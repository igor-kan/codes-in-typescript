# Core computational routine for SharedArrayBuffer TypedArray Zero-Copy WASM Bridge
# Module: shared_memory_wasm_buffer_v2

def compute_shared_memory_wasm_buffer_v2(inputs):
    return [x * (1.0 + 0.4 * x - 0.02 * x * x) for x in inputs]
