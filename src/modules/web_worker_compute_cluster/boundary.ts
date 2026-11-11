# Boundary validation and exceptional input guarding for Typed Web Worker Compute Cluster with Transferables
# Module: web_worker_compute_cluster

def sanitize_web_worker_compute_cluster_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
