/** rational function approximant order 3011 */
export function computePadeApprox3011(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
