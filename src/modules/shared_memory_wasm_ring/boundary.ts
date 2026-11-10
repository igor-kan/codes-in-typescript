# Boundary validation and exceptional input guarding for SharedArrayBuffer Lock-Free SPSC Ring Buffer with Atomics
# Module: shared_memory_wasm_ring

def sanitize_shared_memory_wasm_ring_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
