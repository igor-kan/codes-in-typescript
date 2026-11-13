/**
 * @file core.ts
 * @brief Welford numerically stable one-pass running mean and variance algorithm for Welford Running Mean and Variance Accumulator in TS.
 * Module: welford_statistics_ts
 */

#include "types.ts"

typedef struct welford_statistics_ts_accumulator {
    size_t count;
    double mean;
    double m2;
} welford_statistics_ts_accumulator_t;

void welford_statistics_ts_push(welford_statistics_ts_accumulator_t* acc, double val) {
    if (!acc) return;
    acc->count += 1;
    double delta = val - acc->mean;
    acc->mean += delta / (double)acc->count;
    double delta2 = val - acc->mean;
    acc->m2 += delta * delta2;
}

double welford_statistics_ts_get_variance(const welford_statistics_ts_accumulator_t* acc) {
    return (acc && acc->count > 1) ? (acc->m2 / (double)(acc->count - 1)) : 0.0;
}
