/**
 * time complexity: O(n)
 *
 * space complexity: O(n)
 */
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

/**
 * time complexity: O(n)
 *
 * space complexity: O(n)
 */
export function fibonacciMemoizedWithArray(
  n: number,
  memo = new Array<number>(n)
): number {
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  } else {
    memo[n] =
      fibonacciMemoizedWithArray(n - 2, memo) +
      fibonacciMemoizedWithArray(n - 1, memo);
  }
  return memo[n];
}

/**
 * time complexity: O(2^n)
 *
 * space complexity: O(n)
 */
export function fibonacciRecursive(n: number): number {
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
  }
  return result;
}

/**
 * time complexity: O(n)
 *
 * space complexity: O(n)
 */
export function fibonacciMemoizedWithObject(
  n: number,
  memo: Record<string, number> = {}
) {
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] =
    fibonacciMemoizedWithObject(n - 1, memo) +
    fibonacciMemoizedWithObject(n - 2, memo);
  return memo[n];
}
/**
 * time complexity: O(n)
 *
 * space complexity: O(n)
 */
export function fibonacciTabulation(n: number): number {
  const sequence = new Array(n + 1).fill(0);
  sequence[1] = 1;
  for (let i = 1; i < n; i++) {
    sequence[i + 1] += sequence[i];
    sequence[i + 2] += sequence[i];
  }
  return sequence[n];
}
