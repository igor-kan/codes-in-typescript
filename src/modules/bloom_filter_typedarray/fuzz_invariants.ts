# Fuzzing and invariant test target for Uint32Array Bitwise Bloom Filter with FNV-1a Hashing
# Module: bloom_filter_typedarray
# Invariant: Output must remain finite for all finite inputs bounded in [-1e6, 1e6]
# Invariant: f(0) == 0 strictly preserved
