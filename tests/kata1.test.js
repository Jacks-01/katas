const FizzBuzz = require('../src/kata1.js');

describe('Kata 1:  FizzBuzz', () => {

	it('returns Fizz if the input is a multiple of 3', () => {
		const input = 3;
		expect(FizzBuzz(input)).toBe('Fizz');
	});

	it.todo('returns Buzz if the input is a multiple of 5');

	it.todo('returns FizzBuzz if the input is a multiple of 3 AND 5');
});
