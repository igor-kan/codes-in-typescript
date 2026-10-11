/** rational function approximant order 16 */
export function computePadeApprox16(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 1);
}
