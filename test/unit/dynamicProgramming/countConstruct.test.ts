import {
  countConstructBruteForce,
  countConstructMemoized
} from '../../../src/dynamicProgramming/countConstruct';

describe('Count Construct', () => {
  describe('Brute Force', () => {
    it.each`
      targetString         | wordBank                                         | expectedValue
      ${'purple'}          | ${['purp', 'p', 'ur', 'le', 'purpl']}            | ${2}
      ${'abcdef'}          | ${['ab', 'abc', 'cd', 'def', 'abcd']}            | ${1}
      ${'skateboard'}      | ${['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']} | ${0}
      ${'enterapotentpot'} | ${['a', 'p', 'ent', 'enter', 'ot', 'o', 't']}    | ${4}
    `(
      'should return $expectedValue when targetString = $targetString and wordBank = $wordBank',
      function ({ targetString, wordBank, expectedValue }) {
        expect(countConstructBruteForce(targetString, wordBank)).toEqual(
          expectedValue
        );
      }
    );
  });

  describe('Memoized', () => {
    it.each`
      targetString                       | wordBank                                          | expectedValue
      ${'purple'}                        | ${['purp', 'p', 'ur', 'le', 'purpl']}             | ${2}
      ${'abcdef'}                        | ${['ab', 'abc', 'cd', 'def', 'abcd']}             | ${1}
      ${'skateboard'}                    | ${['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']}  | ${0}
      ${'enterapotentpot'}               | ${['a', 'p', 'ent', 'enter', 'ot', 'o', 't']}     | ${4}
      ${'eeeeeeeeeeeeeeeeeeeeeeeeeeeef'} | ${['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeeee']} | ${0}
    `(
      'should return $expectedValue when targetString = $targetString and wordBank = $wordBank',
      function ({ targetString, wordBank, expectedValue }) {
        expect(countConstructMemoized(targetString, wordBank)).toEqual(
          expectedValue
        );
      }
    );
  });
});
