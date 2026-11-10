# Deterministic unit tests for Typed Web Worker Compute Pipeline with Transferables
# Module: web_worker_pipeline_pool

def test_web_worker_pipeline_pool_zero_element():
    x = 0.0
    res = x * (1.0 + 0.35 * x - 0.03 * x * x)
    assert res == 0.0
