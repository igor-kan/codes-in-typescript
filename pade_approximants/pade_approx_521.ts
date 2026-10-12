/** rational function approximant order 521 */
export function computePadeApprox521(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
