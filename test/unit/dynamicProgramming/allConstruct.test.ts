import 'jest-extended';
import {
  allConstructBruteForce,
  allConstructMemoized
} from '../../../src/dynamicProgramming/allConstruct';

describe('All Construct', () => {
  describe('Brute Force', () => {
    it.each`
      targetString           | wordBank                                         | expectedValue
      ${'purple'}            | ${['purp', 'p', 'ur', 'le', 'purpl']}            | ${[['purp', 'le'], ['p', 'ur', 'p', 'le']]}
      ${'abcdef'}            | ${['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']} | ${[['ab', 'cd', 'ef'], ['ab', 'c', 'def'], ['abc', 'def'], ['abcd', 'ef']]}
      ${'skateboard'}        | ${['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']} | ${[]}
      ${'aaaaaaaaaaaaaaaaz'} | ${['a', 'aa', 'aaa', 'aaaa', 'aaaaa']}           | ${[]}
    `(
      'should return $expectedValue when targetString = $targetString and wordBank = $wordBank',
      function ({ targetString, wordBank, expectedValue }) {
        expect(
          allConstructBruteForce(targetString, wordBank)
        ).toIncludeSameMembers(expectedValue);
      }
    );
  });

  describe('Memoized', () => {
    it.each`
      targetString           | wordBank                                         | expectedValue
      ${'purple'}            | ${['purp', 'p', 'ur', 'le', 'purpl']}            | ${[['purp', 'le'], ['p', 'ur', 'p', 'le']]}
      ${'abcdef'}            | ${['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']} | ${[['ab', 'cd', 'ef'], ['ab', 'c', 'def'], ['abc', 'def'], ['abcd', 'ef']]}
      ${'skateboard'}        | ${['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']} | ${[]}
      ${'aaaaaaaaaaaaaaaaz'} | ${['a', 'aa', 'aaa', 'aaaa', 'aaaaa']}           | ${[]}
    `(
      'should return $expectedValue when targetString = $targetString and wordBank = $wordBank',
      function ({ targetString, wordBank, expectedValue }) {
        expect(
          allConstructMemoized(targetString, wordBank)
        ).toIncludeSameMembers(expectedValue);
      }
    );
  });
});
