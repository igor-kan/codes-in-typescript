# Fuzzing and invariant test target for SharedArrayBuffer WebAssembly Linear Memory Bridge
# Module: wasm_linear_memory_bridge
# Invariant: Output must remain finite for all finite inputs bounded in [-1e6, 1e6]
# Invariant: f(0) == 0 strictly preserved
