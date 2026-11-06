# API Contract Specification: SharedArrayBuffer & WebAssembly SIMD128 Interop

## 1. Interface Signature Standard

The public API for `webassembly_interop` adheres to strict signature and error-handling conventions:

```c
/**
 * @brief Executes the primary computational transformation for SharedArrayBuffer & WebAssembly SIMD128 Interop.
 * @param[in]  input_buffer   Pointer to 64-byte aligned input elements.
 * @param[out] output_buffer  Pointer to 64-byte aligned destination buffer.
 * @param[in]  element_count  Number of elements (must satisfy N > 0).
 * @return 0 on success, negative error code on invalid parameters.
 */
int webassembly_interop_execute(const double* input_buffer, double* output_buffer, size_t element_count);
```

## 2. Invariant Contracts

- **Idempotency**: Repeated read-only evaluations yield identical bitwise results.
- **Zero-Allocation**: No dynamic heap allocations occur within `_execute` calls.
- **Parameter Validation**: All pointer inputs are verified non-null prior to execution.
