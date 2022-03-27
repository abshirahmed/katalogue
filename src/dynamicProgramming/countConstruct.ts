/**
 * Function which returns the number of ways a `targetString`
 * can be constructed by concatenating elements from a `wordBank` array.
 *
 * ---
 *
 * Complexity | O Notation  | Type
 * ---       | ---       | ---
 * Time ⏳      | **O(m * n^m)**  | *exponential*
 * Space 🪐     |  **O(m^2)**     | *quadratic*
 *
 * _m = targetString length (branching factor)_
 *
 * _n = wordBank length (tree height)_
 *
 */
export function countConstructBruteForce(
  targetString: string,
  wordBank: string[]
): number {
  if (targetString === '') {
    return 1;
  }
  let totalCount = 0;
  for (const word of wordBank) {
    if (targetString.startsWith(word)) {
      const suffix = targetString.slice(word.length);
      const constructCount = countConstructBruteForce(suffix, wordBank);
      totalCount += constructCount;
    }
  }
  return totalCount;
}
/**
 * Function which returns the `number` of ways a `targetString`
 * can be constructed by concatenating elements from a `wordBank` array.
 *
 * ---
 *
 * Complexity | O Notation  | Type
 * ---       | ---       | ---
 * Time ⏳       | **O(n * m^2)**  | *quadratic*
 * Space 🪐      |  **O(m^2)**     | *quadratic*
 *
 * _m = targetString length (branching factor)_
 *
 * _n = wordBank length (tree height)_
 *
 */
export function countConstructMemoized(
  targetString: string,
  wordBank: string[],
  memo: Record<string, number> = {}
): number {
  if (targetString in memo) {
    return memo[targetString];
  }
  if (targetString === '') {
    return 1;
  }
  let totalCount = 0;
  for (const word of wordBank) {
    if (targetString.startsWith(word)) {
      const suffix = targetString.slice(word.length);
      const constructCount = countConstructMemoized(suffix, wordBank, memo);
      totalCount += constructCount;
    }
  }
  memo[targetString] = totalCount;
  return totalCount;
}
