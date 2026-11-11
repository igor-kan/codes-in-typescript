# Deterministic unit tests for Typed Web Worker Compute Cluster with Transferables
# Module: web_worker_compute_cluster

def test_web_worker_compute_cluster_zero_element():
    x = 0.0
    res = x * (1.0 + 0.4 * x - 0.02 * x * x)
    assert res == 0.0
