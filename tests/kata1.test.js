const FizzBuzz = require('../src/kata1.js');

describe('Kata 1:  FizzBuzz', () => {
	it('returns Fizz if the input is a multiple of 3', () => {
		const input = [3, 6, 9];
		input.forEach((num) => {
			expect(FizzBuzz(num)).toBe('Fizz');
		});
	});

	it('returns Buzz if the input is a multiple of 5', () => {
		const input = 5;
		expect(FizzBuzz(input)).toBe('Buzz');
	});

	it('returns FizzBuzz if the input is a multiple of 3 AND 5', () => {
		const input = 15;
		expect(FizzBuzz(input)).toBe('FizzBuzz');
	});

	it('returns null if number is NOT a multiple of 3 or 5', () => {
		const input = 1;
		expect(FizzBuzz(input)).toBe(null);
	});
});
