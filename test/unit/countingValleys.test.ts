import { countingValleys } from '../../src/countingValleys';

describe('Counting Valleys', () => {
  it.each`
    steps | path              | expectedValue
    ${8}  | ${'UDDDUDUU'}     | ${1}
    ${12} | ${'DDUUDDUDUUUD'} | ${2}
  `(
    'should return $expectedValue when steps=$steps and path=$path',
    ({ steps, path, expectedValue }) => {
      expect(countingValleys(steps, path)).toEqual(expectedValue);
    }
  );
});
