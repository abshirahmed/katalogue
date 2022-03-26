import 'jest-extended';
import {
  howSumMemoized,
  howSumRecursive
} from '../../../src/dynamicProgramming/howSum';

describe('How Sum', () => {
  describe('Recursive', () => {
    it.each`
      targetSum | numbers         | expectedValue
      ${7}      | ${[2, 3]}       | ${[2, 3, 2]}
      ${7}      | ${[5, 3, 4, 7]} | ${[4, 3]}
      ${8}      | ${[2, 3, 5]}    | ${[2, 2, 2, 2]}
    `(
      'should return $expectedValue when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(howSumRecursive(targetSum, numbers)).toIncludeSameMembers(
          expectedValue
        );
      }
    );

    it.each`
      targetSum | numbers   | expectedValue
      ${7}      | ${[2, 4]} | ${null}
    `(
      'should return $expectedValue when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(howSumRecursive(targetSum, numbers)).toEqual(expectedValue);
      }
    );
  });

  describe('Memoized', () => {
    it.each`
      targetSum | numbers         | expectedValue
      ${7}      | ${[2, 3]}       | ${[3, 2, 2]}
      ${7}      | ${[5, 3, 4, 7]} | ${[4, 3]}
      ${8}      | ${[2, 3, 5]}    | ${[2, 2, 2, 2]}
    `(
      'should return $expectedValue when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(howSumMemoized(targetSum, numbers)).toIncludeSameMembers(
          expectedValue
        );
      }
    );

    it.each`
      targetSum | numbers    | expectedValue
      ${7}      | ${[2, 4]}  | ${null}
      ${300}    | ${[7, 14]} | ${null}
    `(
      'should return $expectedValue when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(howSumMemoized(targetSum, numbers)).toEqual(expectedValue);
      }
    );
  });
});
