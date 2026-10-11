/** rational function approximant order 71 */
export function computePadeApprox71(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
