/** rational function approximant order 81 */
export function computePadeApprox81(x: number): number {
    return (1.0 + x * 1) / (1.0 + x * x * 2);
}
