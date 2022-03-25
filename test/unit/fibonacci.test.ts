import {
  fibonacciBottomUp,
  fibonacciMemoizedWithArray,
  fibonacciMemoizedWithObject,
  fibonacciRecursive
} from '../../src/fibonacci';

describe('Fibonacci', () => {
  describe('Recursive', () => {
    it.each`
      n     | expectedValue
      ${1}  | ${1}
      ${2}  | ${1}
      ${5}  | ${5}
      ${10} | ${55}
      ${20} | ${6765}
      ${30} | ${832040}
      ${40} | ${102334155}
    `(
      'should return $expectedValue when n equals $n',
      function ({ n, expectedValue }) {
        expect(fibonacciRecursive(n)).toEqual(expectedValue);
      }
    );
  });

  describe('Memoized with an Array', () => {
    it.each`
      n       | expectedValue
      ${1}    | ${1}
      ${2}    | ${1}
      ${5}    | ${5}
      ${10}   | ${55}
      ${20}   | ${6765}
      ${30}   | ${832040}
      ${40}   | ${102334155}
      ${50}   | ${12586269025}
      ${100}  | ${354224848179262000000}
      ${1000} | ${4.346655768693743e208}
      ${1476} | ${1.3069892237633987e308}
      ${1477} | ${Infinity}
    `(
      'should return $expectedValue when n equals $n',
      function ({ n, expectedValue }) {
        expect(fibonacciMemoizedWithArray(n)).toEqual(expectedValue);
      }
    );
  });

  describe('Memoized with an Object', () => {
    it.each`
      n       | expectedValue
      ${1}    | ${1}
      ${2}    | ${1}
      ${5}    | ${5}
      ${10}   | ${55}
      ${20}   | ${6765}
      ${30}   | ${832040}
      ${40}   | ${102334155}
      ${50}   | ${12586269025}
      ${100}  | ${354224848179262000000}
      ${1000} | ${4.346655768693743e208}
      ${1476} | ${1.3069892237633987e308}
      ${1477} | ${Infinity}
    `(
      'should return $expectedValue when n equals $n',
      function ({ n, expectedValue }) {
        expect(fibonacciMemoizedWithObject(n)).toEqual(expectedValue);
      }
    );
  });

  describe('Bottom Up', () => {
    it.each`
      n       | expectedValue
      ${1}    | ${1}
      ${2}    | ${1}
      ${5}    | ${5}
      ${10}   | ${55}
      ${20}   | ${6765}
      ${30}   | ${832040}
      ${40}   | ${102334155}
      ${50}   | ${12586269025}
      ${1000} | ${4.346655768693743e208}
      ${1476} | ${1.3069892237633987e308}
      ${1477} | ${Infinity}
    `(
      'should return $expectedValue when n equals $n',
      function ({ n, expectedValue }) {
        expect(fibonacciBottomUp(n)).toEqual(expectedValue);
      }
    );
  });
});
