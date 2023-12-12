const stringCalculator = require('../src/kata2');

describe('Kata 2: String Calculator', () => {
	it('returns 0 if the numbers string is empty', () => {
        const input = ''
        expect(stringCalculator(input)).toBe(0)
        
    });
});
