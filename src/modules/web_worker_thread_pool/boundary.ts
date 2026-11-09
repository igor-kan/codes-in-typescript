# Boundary validation and exceptional input guarding for Bounded Web Worker Pool with Transferable ArrayBuffers
# Module: web_worker_thread_pool

def sanitize_web_worker_thread_pool_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
