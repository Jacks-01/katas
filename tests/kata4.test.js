const { searchCities } = require('../src/kata4');

describe('Kata 4: Search Functionalit', () => {
    it('returns no results if the search input is less than 2 characters', () => {
        
        expect(searchCities('a')).toBe('no results');
    });
});
