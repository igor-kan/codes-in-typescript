/** rational function approximant order 3001 */
export function computePadeApprox3001(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
