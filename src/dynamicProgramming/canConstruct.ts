/**
 * Function which returns a `boolean` indicating whether
 * a `targetString` can be constructed by concatenating
 * elements from a `wordBank` array.
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
export function canConstructBruteForce(
  targetString: string,
  wordBank: string[]
): boolean {
  if (targetString === '') {
    return true;
  }
  for (const word of wordBank) {
    if (targetString.startsWith(word)) {
      const suffix = targetString.slice(word.length); // additional m calls (worst case scenario)
      if (canConstructBruteForce(suffix, wordBank)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Function which returns a `boolean` indicating whether
 * a `targetString` can be constructed by concatenating
 * elements from a `wordBank` array.
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
export function canConstructMemoized(
  targetString: string,
  wordBank: string[],
  memo: Record<string, boolean> = {}
): boolean {
  if (targetString in memo) {
    return memo[targetString];
  }
  if (targetString === '') {
    return true;
  }
  for (const word of wordBank) {
    if (targetString.startsWith(word)) {
      const suffix = targetString.slice(word.length); // additional m calls (worst case scenario)
      if (canConstructMemoized(suffix, wordBank, memo)) {
        memo[targetString] = true;
        return true;
      }
    }
  }
  memo[targetString] = false;
  return false;
}
