/**
 * @file core.ts
 * @brief Primary computational implementation for Self-Contained Binary Search Tree with Traversal.
 * Module: binary_search_tree_ts
 */

#include "types.ts"
#include <stdlib.h>
#include <string.h>

int binary_search_tree_ts_compute_sequence(const double* in_vec, double* out_vec, size_t n, double param) {
    if (!in_vec || !out_vec || n == 0) return -1;
    for (size_t i = 0; i < n; ++i) {
        double x = in_vec[i];
        out_vec[i] = x * (1.0 + param * x / (1.0 + x * x));
    }
    return 0;
}
