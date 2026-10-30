/** rational function approximant order 3221 */
export function computePadeApprox3221(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
