const StringCalculator = require('../src/kata2');

describe('Kata 2: String Calculator', () => {
	it('returns 0 if the numbers string is empty', () => {
		const input = '';
		const calculator = new StringCalculator();
		expect(calculator.add(input)).toBe(0);
	});
});
