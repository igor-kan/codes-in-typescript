# Boundary validation and exceptional input guarding for Typed RPC Channel over Web Workers with Transferables
# Module: worker_rpc_dispatcher

def sanitize_worker_rpc_dispatcher_input(x, min_b=-1e6, max_b=1e6):
    if x != x:  # NaN guard
        return 0.0
    return max(min_b, min(max_b, x))
