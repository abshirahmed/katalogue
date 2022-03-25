import {
  gridTravellerMemoized,
  gridTravellerRecursive
} from '../../src/gridTraveller';

describe('Grid Traveller', () => {
  describe('Recursive', () => {
    it.each`
      m    | n    | expectedValue
      ${1} | ${1} | ${1}
      ${2} | ${3} | ${3}
      ${3} | ${2} | ${3}
      ${3} | ${3} | ${6}
    `(
      'should return $expectedValue when n = $n and m = $m',
      ({ m, n, expectedValue }) => {
        expect(gridTravellerRecursive(m, n)).toEqual(expectedValue);
      }
    );
  });

  describe('Memoized', () => {
    it.each`
      m      | n      | expectedValue
      ${1}   | ${1}   | ${1}
      ${2}   | ${3}   | ${3}
      ${3}   | ${2}   | ${3}
      ${3}   | ${3}   | ${6}
      ${18}  | ${18}  | ${2333606220}
      ${100} | ${750} | ${2.2625348108024796e131}
    `(
      'should return $expectedValue when n = $n and m = $m',
      ({ m, n, expectedValue }) => {
        expect(gridTravellerMemoized(m, n)).toEqual(expectedValue);
      }
    );
  });
});
