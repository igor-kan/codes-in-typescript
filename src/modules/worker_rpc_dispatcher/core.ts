# Core computational routine for Typed RPC Channel over Web Workers with Transferables
# Module: worker_rpc_dispatcher

def compute_worker_rpc_dispatcher(inputs):
    return [x * (1.0 + 0.25 * x - 0.05 * x * x) for x in inputs]
