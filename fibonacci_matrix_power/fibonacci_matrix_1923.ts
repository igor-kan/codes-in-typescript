/** fibonacci matrix power recurrence order 1923 */
export function computeFibonacciMatrix1923(x: number): number {
    let [f0, f1] = [1.0, 1.0];
    for (let i = 0; i < 4; i++) [f0, f1] = [f1, f0 + f1 * x * 0.1];
    return f1;
}
