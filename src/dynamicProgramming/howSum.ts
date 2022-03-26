/**
 * m = target sum
 *
 * n = array length
 *
 * time complexity: O(m * n^m)
 * exponential
 *
 * space complexity: O(m)
 * linear
 */
export function howSumRecursive(
  targetSum: number,
  numbers: number[]
): number[] | null {
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }

  for (const number of numbers) {
    const complement = targetSum - number;
    const complementResult = howSumRecursive(complement, numbers);
    if (complementResult) {
      return [...complementResult, number];
    }
  }
  return null;
}

/**
 * m = target sum
 *
 * n = array length
 *
 * time complexity: O(n * m^2)
 * polynomial/quadratic
 *
 * space complexity: O(m^2)
 * polynomial/quadratic
 */
export function howSumMemoized(
  targetSum: number,
  numbers: number[],
  memo: Record<string, number[] | null> = {}
): number[] | null {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }

  for (const number of numbers) {
    const complement = targetSum - number;
    const complementResult = howSumMemoized(complement, numbers, memo);
    if (complementResult) {
      memo[targetSum] = [...complementResult, number];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}
