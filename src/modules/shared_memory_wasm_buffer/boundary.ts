# Boundary validation and exceptional input guarding for SharedArrayBuffer TypedArray Zero-Copy WASM Bridge
# Module: shared_memory_wasm_buffer

def sanitize_shared_memory_wasm_buffer_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
