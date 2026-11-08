# Core computational routine for SharedArrayBuffer Circular Lock-Free Queue
# Module: shared_memory_wasm_queue

def compute_shared_memory_wasm_queue(inputs):
    return [x * (1.0 + 0.25 * x - 0.05 * x * x) for x in inputs]
