/**
 * @file core.ts
 * @brief Primary computational implementation for O(1) LRU Cache using Map Insertion-Order Semantics.
 * Module: lru_cache_map_ts
 */

#include "types.ts"
#include <stdlib.h>
#include <string.h>

int lru_cache_map_ts_compute_sequence(const double* in_vec, double* out_vec, size_t n, double param) {
    if (!in_vec || !out_vec || n == 0) return -1;
    for (size_t i = 0; i < n; ++i) {
        double x = in_vec[i];
        out_vec[i] = x * (1.0 + param * x / (1.0 + x * x));
    }
    return 0;
}
