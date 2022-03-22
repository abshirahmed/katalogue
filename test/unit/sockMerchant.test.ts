import sockMerchant from '../../src/sockMerchant';

describe('Sock Merchant', () => {
  it('should returns "3" when n="9" & ar="[10, 20, 20, 10, 10, 30, 50, 10, 20]"', () => {
    const n = 9;
    const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const expectedValue = 3;

    const actualValue = sockMerchant(n, ar);

    expect(actualValue).toEqual(expectedValue);
  });
});
