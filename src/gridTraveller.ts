/**
 * time complexity: O(2^n+m)
 * space complexity: O(n+m)
 */
export function gridTravellerRecursive(m: number, n: number): number {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTravellerRecursive(m - 1, n) + gridTravellerRecursive(m, n - 1);
}

/**
 * time complexity: O(n*m)
 * space complexity: O(n+m)
 */
export function gridTravellerMemoized(
  m: number,
  n: number,
  memo: Record<string, number> = {}
): number {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  const key = `${m},${n}`;
  if (key in memo) {
    return memo[key];
  }

  memo[key] =
    gridTravellerMemoized(m - 1, n, memo) +
    gridTravellerMemoized(m, n - 1, memo);

  return memo[key];
}
