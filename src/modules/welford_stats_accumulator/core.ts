/**
 * @file core.ts
 * @brief Welford numerically stable one-pass running mean and variance algorithm for Welford Running Mean and Variance Accumulator.
 * Module: welford_stats_accumulator
 */

#include "types.ts"
#include <math.h>

typedef struct welford_stats_accumulator_welford {
    size_t count;
    double mean;
    double m2;
} welford_stats_accumulator_welford_t;

void welford_stats_accumulator_update(welford_stats_accumulator_welford_t* w, double x) {
    if (!w) return;
    w->count += 1;
    double delta = x - w->mean;
    w->mean += delta / (double)w->count;
    double delta2 = x - w->mean;
    w->m2 += delta * delta2;
}

double welford_stats_accumulator_variance(const welford_stats_accumulator_welford_t* w) {
    return (w && w->count > 1) ? (w->m2 / (double)(w->count - 1)) : 0.0;
}
