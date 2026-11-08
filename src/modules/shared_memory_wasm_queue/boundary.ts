# Boundary validation and exceptional input guarding for SharedArrayBuffer Circular Lock-Free Queue
# Module: shared_memory_wasm_queue

def sanitize_shared_memory_wasm_queue_input(x, min_b=-1e6, max_b=1e6):
    if x != x:  # NaN guard
        return 0.0
    return max(min_b, min(max_b, x))
