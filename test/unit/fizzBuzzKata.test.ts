import { fizzBuzz } from '../../src/fizzBuzz';

/**
 * TDD
 * RED 🔴 GREEN 🟢 REFACTOR 🔵
 * Write a program that prints one line for each number from 1 to 100
 * For multiples of three print Fizz instead of the number
 * For the multiples of five print Buzz instead of the number
 * For numbers which are multiples of both three and five print FizzBuzz instead of the number
 */

describe('Fizz Buzz', () => {
  it.each`
    value | expectedValue
    ${1}  | ${1}
    ${3}  | ${'Fizz'}
    ${5}  | ${'Buzz'}
    ${15} | ${'FizzBuzz'}
  `(
    'should return $expectedValue when give $value',
    ({ expectedValue, value }) => {
      const actualValue = fizzBuzz(value);
      expect(actualValue).toEqual(expectedValue);
    }
  );
});
