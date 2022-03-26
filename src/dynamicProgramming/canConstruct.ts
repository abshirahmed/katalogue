/**
 * ## canConstructBruteForce()
 *
 * A function which returns a **boolean** indicating whether
 * a **targetString** can be constructed by concatenating
 * elements of a **wordBank** array.
 *
 * ---
 * **time complexity: O(m * n^m)** (exponential)
 *
 * **space complexity: O(m^2)** (quadratic)
 *
 * **m = targetString length** (branching factor)
 *
 * **n = wordBank length** (tree height)
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
 * ## canConstructMemoized()
 *
 * A function which returns a **boolean** indicating whether
 * a **targetString** can be constructed by concatenating
 * elements of a **wordBank** array.
 *
 * ---
 * **time complexity: O(n * m^2)** (quadratic)
 *
 * **space complexity: O(m^2)** (quadratic)
 *
 * **m = targetString length** (branching factor)
 *
 * **n = wordBank length** (tree height)
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
