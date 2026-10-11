/** rational function approximant order 86 */
export function computePadeApprox86(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 1);
}
