/** rational function approximant order 3341 */
export function computePadeApprox3341(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
