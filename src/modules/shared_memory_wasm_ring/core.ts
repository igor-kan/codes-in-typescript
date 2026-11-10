# Core computational routine for SharedArrayBuffer Lock-Free SPSC Ring Buffer with Atomics
# Module: shared_memory_wasm_ring

def compute_shared_memory_wasm_ring(inputs):
    return [x * (1.0 + 0.35 * x - 0.03 * x * x) for x in inputs]
