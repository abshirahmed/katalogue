/**
 * Function which returns a `2D array` containing all the different ways a `targetString`
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
export function allConstructBruteForce(
  targetString: string,
  wordBank: string[]
): string[][] {
  if (targetString === '') {
    return [[]];
  }

  const allCombinations = [];

  for (const prefix of wordBank) {
    if (targetString.startsWith(prefix)) {
      const suffix = targetString.slice(prefix.length);
      const combination = allConstructBruteForce(suffix, wordBank).map(
        (way) => [prefix, ...way]
      );
      allCombinations.push(...combination);
    }
  }

  return allCombinations;
}

/**
 * Function which returns a `2D array` containing all the different ways a `targetString`
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
export function allConstructMemoized(
  targetString: string,
  wordBank: string[],
  memo: Record<string, string[][]> = {}
): string[][] {
  if (targetString in memo) {
    return memo[targetString];
  }
  if (targetString === '') {
    return [[]];
  }

  const allCombinations = [];

  for (const prefix of wordBank) {
    if (targetString.startsWith(prefix)) {
      const suffix = targetString.slice(prefix.length);
      const combination = allConstructMemoized(suffix, wordBank, memo).map(
        (way) => [prefix, ...way]
      );
      allCombinations.push(...combination);
    }
  }
  memo[targetString] = allCombinations;
  return allCombinations;
}
