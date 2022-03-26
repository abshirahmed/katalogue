import {
  bestSumBruteForce,
  bestSumMemoized
} from '../../../src/dynamicProgramming/bestSum';

describe('Best sum', () => {
  describe('Brute force', () => {
    it.each`
      targetSum | numbers         | expectedValue
      ${7}      | ${[5, 3, 4, 7]} | ${[7]}
      ${8}      | ${[2, 3, 5]}    | ${[3, 5]}
      ${8}      | ${[1, 4, 5]}    | ${[4, 4]}
    `(
      'should return $expectedValue.sample when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(bestSumBruteForce(targetSum, numbers)).toEqual(
          expectedValue ? expect.arrayContaining(expectedValue) : expectedValue
        );
      }
    );
  });
  describe('Memoized', () => {
    it.each`
      targetSum | numbers          | expectedValue
      ${7}      | ${[5, 3, 4, 7]}  | ${[7]}
      ${8}      | ${[2, 3, 5]}     | ${[3, 5]}
      ${8}      | ${[1, 4, 5]}     | ${[4, 4]}
      ${100}    | ${[1, 2, 5, 25]} | ${[25, 25, 25, 25]}
    `(
      'should return $expectedValue.sample when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(bestSumMemoized(targetSum, numbers)).toEqual(
          expectedValue ? expect.arrayContaining(expectedValue) : expectedValue
        );
      }
    );
  });
});
