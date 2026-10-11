/** rational function approximant order 91 */
export function computePadeApprox91(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
