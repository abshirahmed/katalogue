/**
 * m = target sum
 *
 * n = array length
 *
 * time complexity: O(n^m)
 *
 * space complexity: O(m)
 * linear
 */
export function canSumRecursive(targetSum: number, numbers: number[]): boolean {
  if (targetSum === 0) {
    return true;
  }
  if (targetSum < 0) {
    return false;
  }

  for (const currentValue of numbers) {
    const complement = targetSum - currentValue;
    if (canSumRecursive(complement, numbers)) {
      return true;
    }
  }
  return false;
}

/**
 * m = target sum
 *
 * n = array length
 *
 * time complexity: O(m*n)
 *
 * space complexity: O(m)
 * linear
 */
export function canSumMemoized(
  targetSum: number,
  numbers: number[],
  memo: Record<string, boolean> = {}
): boolean {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) {
    return true;
  }
  if (targetSum < 0) {
    return false;
  }

  for (const currentValue of numbers) {
    const complement = targetSum - currentValue;
    if (canSumMemoized(complement, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}
