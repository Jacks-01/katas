const { searchCities } = require('../src/kata4');

describe('Kata 4: Search Functionality', () => {
    it('returns no results if the search input is less than 2 characters', () => {
        
        expect(searchCities('a')).toBe('no results');
    });

    it('returns all cities starting with the provided search input', () => {

        const searchInput = 'Va'
        
        expect(searchCities(searchInput)).toStrictEqual(['Valencia', 'Vancouver']);
    });

    it('the search should be case insensitive', () => {

        const searchInput = 'va'
        
        expect(searchCities(searchInput)).toStrictEqual(['Valencia', 'Vancouver']);
    });


});
