const StringCalculator = require('../src/kata2');

describe('Kata 2: String Calculator', () => {
	it('returns 0 if the numbers string is empty', () => {
		const input = '';
		const calculator = new StringCalculator();
		expect(calculator.add(input)).toBe(0);
	});

	it('returns the value of the number in the string if the string only has one number', () => {
		const input = '10';
		const calculator = new StringCalculator();
		expect(calculator.add(input)).toBe(10);
	});
	it('returns the sum of all of the numbers in the string', () => {
		const input = '5, 5, 5';
		const calculator = new StringCalculator();
		expect(calculator.add(input)).toBe(15);
	});

	it.todo('add method can parse new lines instead of commas');

    it.todo('validate the string to not have the separator at the end');
    
	it.todo('can handle more than one delimiter');
});
