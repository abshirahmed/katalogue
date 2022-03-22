export function fibonacciBottomUp(n: number): number {
  if (n <= 2) {
    return 1;
  }
  const sequence = new Array(n);
  sequence[1] = 1;
  sequence[2] = 1;
  for (let i = 3; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[n];
}

export function fibonacciMemoized(
  n: number,
  memo = new Array<number>(n)
): number {
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    result = 1;
  } else {
    result = fibonacciMemoized(n - 2, memo) + fibonacciMemoized(n - 1, memo);
  }
  memo[n] = result;
  return result;
}

export function fibonacciRecursive(n: number): number {
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
  }
  return result;
}
