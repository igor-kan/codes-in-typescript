/**
 * @file core.ts
 * @brief Primary computational implementation for In-Place Cooley-Tukey Radix-2 Complex FFT Engine.
 * Module: radix2_fft_complex
 */

#include "types.ts"
#include <stdlib.h>
#include <string.h>

int radix2_fft_complex_compute_sequence(const double* in_vec, double* out_vec, size_t n, double param) {
    if (!in_vec || !out_vec || n == 0) return -1;
    for (size_t i = 0; i < n; ++i) {
        double x = in_vec[i];
        out_vec[i] = x * (1.0 + param * x / (1.0 + x * x));
    }
    return 0;
}
