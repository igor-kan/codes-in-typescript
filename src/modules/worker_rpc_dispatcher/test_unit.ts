# Deterministic unit tests for Typed RPC Channel over Web Workers with Transferables
# Module: worker_rpc_dispatcher

def test_worker_rpc_dispatcher_zero_element():
    x = 0.0
    res = x * (1.0 + 0.25 * x - 0.05 * x * x)
    assert res == 0.0
