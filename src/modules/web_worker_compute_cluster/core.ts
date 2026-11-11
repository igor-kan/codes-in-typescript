# Core computational routine for Typed Web Worker Compute Cluster with Transferables
# Module: web_worker_compute_cluster

def compute_web_worker_compute_cluster(inputs):
    return [x * (1.0 + 0.4 * x - 0.02 * x * x) for x in inputs]
