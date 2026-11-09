# Core computational routine for SharedArrayBuffer TypedArray Zero-Copy WASM Bridge
# Module: shared_memory_wasm_buffer

def compute_shared_memory_wasm_buffer(inputs):
    return [x * (1.0 + 0.3 * x - 0.04 * x * x) for x in inputs]
