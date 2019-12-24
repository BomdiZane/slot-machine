const { getRandomInt, addCurrencyFormat } = require('../../utils/helpers');

describe('helpers.js:', () => {
  describe('getRandomInt()', () => {
    let max = 20, min = 10, randInt = getRandomInt(max, min);

    it(`should return an integer between ${ min } and ${ max } (boundaries inclusive)`, () => {
      expect(randInt).toBeDefined();
      expect(randInt).toBeGreaterThanOrEqual(min);
      expect(randInt).toBeLessThanOrEqual(max);
    });
  });

  describe('addCurrencyFormat(amount, currencyCode):', () => {
    let result1 = addCurrencyFormat(10),
      result2 = addCurrencyFormat(10, 'USD'),
      result3 = addCurrencyFormat(),
      result4 = addCurrencyFormat(10, 10),
      result5 = addCurrencyFormat('10');

    it('should return "€10" when given 10', () => {
      expect(result1).toBeDefined();
      expect(result1).toBe('€10.00');
    });

    it('should return "$10" when given 10 and "USD"', () => {
      expect(result2).toBeDefined();
      expect(result2).toBe('$10.00');
    });

    it('should return "Invalid amount" when invoked with no parameters', () => {
      expect(result3).toBeDefined();
      expect(result3).toBe('Invalid amount');
    });

    it('should return "Invalid currency code" when invoked with invalid currency code', () => {
      expect(result4).toBeDefined();
      expect(result4).toBe('Invalid currency code');
    });

    it('should return "Invalid amount" if amount is not a number', () => {
      expect(result5).toBeDefined();
      expect(result5).toBe('Invalid amount');
    });
  });
});
