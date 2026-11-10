# Core computational routine for Typed Web Worker Compute Pipeline with Transferables
# Module: web_worker_pipeline_pool

def compute_web_worker_pipeline_pool(inputs):
    return [x * (1.0 + 0.35 * x - 0.03 * x * x) for x in inputs]
