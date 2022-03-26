import {
  howSumMemoized,
  howSumRecursive
} from '../../../src/dynamicProgramming/howSum';

describe('How Sum', () => {
  describe('Recursive', () => {
    it.each`
      targetSum | numbers         | expectedValue
      ${7}      | ${[2, 3]}       | ${[3, 2, 2]}
      ${7}      | ${[5, 3, 4, 7]} | ${[4, 3]}
      ${7}      | ${[2, 4]}       | ${null}
      ${8}      | ${[2, 3, 5]}    | ${[2, 2, 2, 2]}
    `(
      'should return $expectedValue when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(howSumRecursive(targetSum, numbers)).toEqual(
          expectedValue ? expect.arrayContaining(expectedValue) : expectedValue
        );
      }
    );
  });

  describe('Memoized', () => {
    it.each`
      targetSum | numbers         | expectedValue
      ${7}      | ${[2, 3]}       | ${[3, 2, 2]}
      ${7}      | ${[5, 3, 4, 7]} | ${[4, 3]}
      ${7}      | ${[2, 4]}       | ${null}
      ${8}      | ${[2, 3, 5]}    | ${[2, 2, 2, 2]}
      ${300}    | ${[7, 14]}      | ${null}
    `(
      'should return $expectedValue when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(howSumMemoized(targetSum, numbers)).toEqual(
          expectedValue ? expect.arrayContaining(expectedValue) : expectedValue
        );
      }
    );
  });
});
