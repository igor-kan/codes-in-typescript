# Core computational routine for Bounded Web Worker Pool with Transferable ArrayBuffers
# Module: web_worker_thread_pool

def compute_web_worker_thread_pool(inputs):
    return [x * (1.0 + 0.3 * x - 0.04 * x * x) for x in inputs]
