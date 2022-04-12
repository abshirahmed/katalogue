import { rotationalCipher } from '../../src/rotationalCipher';

describe('Rotational Cipher', () => {
  it.each`
    input                                     | rotationalFactor | expectedValue
    ${'Zebra-493?'}                           | ${3}             | ${'Cheud-726?'}
    ${'abcdefghijklmNOPQRSTUVWXYZ0123456789'} | ${39}            | ${'nopqrstuvwxyzABCDEFGHIJKLM9012345678'}
    ${'All-convoYs-9-be:Alert1.'}             | ${4}             | ${'Epp-gsrzsCw-3-fi:Epivx5.'}
    ${'abcdZXYzxy-999.@'}                     | ${200}           | ${'stuvRPQrpq-999.@'}
  `(
    'should return $expectedValue when input is $input and rotationFactor is $rotationalFactor',
    function ({ input, rotationalFactor, expectedValue }) {
      expect(rotationalCipher(input, rotationalFactor)).toEqual(expectedValue);
    }
  );
});
