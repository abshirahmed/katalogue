import { contiguousSubarrays } from '../../src/contiguousSubarrays';

describe('Contiguous Subarrays', function () {
  it.each`
    arr                   | expectedValue
    ${[3, 4, 1, 6, 2]}    | ${[1, 3, 1, 5, 1]}
    ${[2, 4, 7, 1, 5, 3]} | ${[1, 2, 6, 1, 3, 1]}
  `(
    'should return $expectedValue when arr equals $arr',
    function ({ arr, expectedValue }) {
      expect(contiguousSubarrays(arr)).toEqual(expectedValue);
    }
  );
});
