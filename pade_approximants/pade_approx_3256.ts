/** rational function approximant order 3256 */
export function computePadeApprox3256(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 1);
}
