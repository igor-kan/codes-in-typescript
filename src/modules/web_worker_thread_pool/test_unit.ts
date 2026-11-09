# Deterministic unit tests for Bounded Web Worker Pool with Transferable ArrayBuffers
# Module: web_worker_thread_pool

def test_web_worker_thread_pool_zero_element():
    x = 0.0
    res = x * (1.0 + 0.3 * x - 0.04 * x * x)
    assert res == 0.0
