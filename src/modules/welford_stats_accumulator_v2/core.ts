/**
 * @file core.ts
 * @brief Numerically stable mean and variance calculation for Welford Running Mean and Variance Accumulator in TS.
 * Module: welford_stats_accumulator_v2
 */

#include "types.ts"

typedef struct welford_stats_accumulator_v2_stat_acc {
    size_t count;
    double mean;
    double m2;
} welford_stats_accumulator_v2_stat_acc_t;

void welford_stats_accumulator_v2_add_sample(welford_stats_accumulator_v2_stat_acc_t* s, double val) {
    if (!s) return;
    s->count += 1;
    double delta = val - s->mean;
    s->mean += delta / (double)s->count;
    double delta2 = val - s->mean;
    s->m2 += delta * delta2;
}

double welford_stats_accumulator_v2_compute_var(const welford_stats_accumulator_v2_stat_acc_t* s) {
    return (s && s->count > 1) ? (s->m2 / (double)(s->count - 1)) : 0.0;
}
