/**
 * Brute force method
 *
 * m = target sum
 *
 * n = array length
 *
 * time complexity: O(m * n^m)
 * exponential
 *
 * space complexity: O(m^2)
 * quadratic
 */
export function bestSumBruteForce(
  targetSum: number,
  numbers: number[]
): number[] | null {
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }

  let shortestCombination: number[] | null = null;

  for (const number of numbers) {
    const complement = targetSum - number;
    const complementResult = bestSumBruteForce(complement, numbers);
    if (complementResult) {
      const combination = [...complementResult, number];
      if (
        !shortestCombination ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
}

/**
 * Memoized method
 *
 * m = target sum
 *
 * n = array length
 *
 * time complexity: O(n * m^2)
 * polynomial/quadratic
 *
 * space complexity: O(m^2)
 * quadratic
 */
export function bestSumMemoized(
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

  let shortestCombination: number[] | null = null;

  for (const number of numbers) {
    const complement = targetSum - number;
    const complementResult = bestSumMemoized(complement, numbers, memo);
    if (complementResult) {
      const combination = [...complementResult, number];
      if (
        !shortestCombination ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
}
