import { fizzBuzz } from '../../src/fizzBuzz';

/**
 * TDD - RED - GREEN - REFACTOR
 * Write a program that prints one line for each number from 1 to 100
 * For multiples of three print Fizz instead of the number
 * For the multiples of five print Buzz instead of the number
 * For numbers which are multiples of both three and five print FizzBuzz instead of the number
 */

describe('Fizz Buzz', () => {
  it.each([
    {
      value: 1,
      expectedValue: 1
    },
    {
      value: 3,
      expectedValue: 'Fizz'
    },
    {
      value: 5,
      expectedValue: 'Buzz'
    },
    {
      value: 15,
      expectedValue: 'FizzBuzz'
    }
  ])(
    'should return $expectedValue when give $value',
    ({ expectedValue, value }) => {
      const actualValue = fizzBuzz(value);
      expect(actualValue).toEqual(expectedValue);
    }
  );
});
