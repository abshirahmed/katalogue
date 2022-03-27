import {
  canConstructBruteForce,
  canConstructMemoized
} from '../../../src/dynamicProgramming/canConstruct';

describe('Can Construct', () => {
  describe('Brute Force', () => {
    it.each`
      targetString         | wordBank                                         | expectedValue
      ${'abcdef'}          | ${['ab', 'abc', 'cd', 'def', 'abcd']}            | ${true}
      ${'skateboard'}      | ${['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']} | ${false}
      ${'enterapotentpot'} | ${['a', 'p', 'ent', 'enter', 'ot', 'o', 't']}    | ${true}
    `(
      'should return $expectedValue when targetString = $targetString and wordBank = $wordBank',
      function ({ targetString, wordBank, expectedValue }) {
        expect(canConstructBruteForce(targetString, wordBank)).toEqual(
          expectedValue
        );
      }
    );
  });

  describe('Memoized', () => {
    it.each`
      targetString                       | wordBank                                          | expectedValue
      ${'abcdef'}                        | ${['ab', 'abc', 'cd', 'def', 'abcd']}             | ${true}
      ${'skateboard'}                    | ${['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']}  | ${false}
      ${'enterapotentpot'}               | ${['a', 'p', 'ent', 'enter', 'ot', 'o', 't']}     | ${true}
      ${'eeeeeeeeeeeeeeeeeeeeeeeeeeeef'} | ${['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeeee']} | ${false}
    `(
      'should return $expectedValue when targetString = $targetString and wordBank = $wordBank',
      function ({ targetString, wordBank, expectedValue }) {
        expect(canConstructMemoized(targetString, wordBank)).toEqual(
          expectedValue
        );
      }
    );
  });
});
