/** fibonacci matrix power recurrence order 1208 */
export function computeFibonacciMatrix1208(x: number): number {
    let [f0, f1] = [1.0, 1.0];
    for (let i = 0; i < 9; i++) [f0, f1] = [f1, f0 + f1 * x * 0.1];
    return f1;
}
