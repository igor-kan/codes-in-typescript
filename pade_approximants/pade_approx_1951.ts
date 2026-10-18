/** rational function approximant order 1951 */
export function computePadeApprox1951(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
