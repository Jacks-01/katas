const { searchCities, cities } = require('../src/kata4');

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

    it('should match on any part of the city name, not just the beginning of the string', () => {

        const searchInput = 'ape'
        
        expect(searchCities(searchInput)).toStrictEqual(['Budapest']);
    });

    it('return all results if the input is a "*" (asterisk)', () => {

        const searchInput = '*'
        
        expect(searchCities(searchInput)).toStrictEqual(cities);
    });


});
