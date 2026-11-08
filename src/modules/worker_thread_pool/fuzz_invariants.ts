# Fuzzing and invariant test target for Node.js Worker Threads Pool with Transferrable ArrayBuffers
# Module: worker_thread_pool
# Invariant: Output must remain finite for all finite inputs bounded in [-1e6, 1e6]
# Invariant: f(0) == 0 strictly preserved
