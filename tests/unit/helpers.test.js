const { addCurrencyFormat, removeCurrencyFormat, formatName } = require('../../utils/helpers');

describe('helpers.js:', () => {

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

	describe('removeCurrencyFormat(figure):', () => {
		let result1 = removeCurrencyFormat('€10,000.01'),
			result2 = removeCurrencyFormat(),
			result3 = removeCurrencyFormat(10);

		it('should return "10000.01" when given "€10,000.01"', () => {
			expect(result1).toBeDefined();
			expect(result1).toBe('10000.01');
		});

		it('should return "0" if invoked with no parameters', () => {
			expect(result2).toBeDefined();
			expect(result2).toBe('0');
		});

		it('should return "0" if figure is not a string', () => {
			expect(result3).toBeDefined();
			expect(result3).toBe('0');
		});
	});

	describe('formatName(name):', () => {
		let result1 = formatName('Bomdi'),
			result2 = formatName('bomdi'),
			result3 = formatName(),
			result4 = formatName('bomdi zane c');

		it('should return "Bomdi" when given "Bomdi"', () => {
			expect(result1).toBeDefined();
			expect(result1).toBe('Bomdi');
		});

		it('should return "Bomdi" when given "bomdi"', () => {
			expect(result2).toBeDefined();
			expect(result2).toBe('Bomdi');
		});

		it('should return empty string if invoked with no parameters', () => {
			expect(result3).toBeDefined();
			expect(result3).toBe('');
		});

		it('should return "Bomdi Zane C" when given "bomdi zane c"', () => {
			expect(result4).toBeDefined();
			expect(result4).toBe('Bomdi Zane C');
		});

		it('should throw error if name is not a string', () => {
			expect(() => formatName(10)).toThrow();
		});
	});

});
