import {
  canSumMemoized,
  canSumRecursive
} from '../../../src/dynamicProgramming/canSum';

describe('Can Sum', () => {
  describe('Recursive', () => {
    it.each`
      targetSum | numbers         | expectedValue
      ${7}      | ${[2, 3]}       | ${true}
      ${7}      | ${[5, 3, 4, 7]} | ${true}
      ${7}      | ${[2, 4]}       | ${false}
      ${8}      | ${[2, 3, 5]}    | ${true}
    `(
      'should return $expectedValue when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(canSumRecursive(targetSum, numbers)).toEqual(expectedValue);
      }
    );
  });

  describe('Memoized', () => {
    it.each`
      targetSum | numbers         | expectedValue
      ${7}      | ${[2, 3]}       | ${true}
      ${7}      | ${[5, 3, 4, 7]} | ${true}
      ${7}      | ${[2, 4]}       | ${false}
      ${8}      | ${[2, 3, 5]}    | ${true}
      ${300}    | ${[7, 14]}      | ${false}
    `(
      'should return $expectedValue when targetSum = $targetSum and numbers = $numbers',
      function ({ targetSum, numbers, expectedValue }) {
        expect(canSumMemoized(targetSum, numbers)).toEqual(expectedValue);
      }
    );
  });
});
