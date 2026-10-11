/** rational function approximant order 56 */
export function computePadeApprox56(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 1);
}
