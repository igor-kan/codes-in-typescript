/** rational function approximant order 3416 */
export function computePadeApprox3416(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 1);
}
