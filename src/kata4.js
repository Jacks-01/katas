//* Kata 4 - Search Functionality

//Implement a city search functionality. The function takes a string (search text) as input and returns
// the found cities which corresponds to the search text.

const cities = [
	'Paris',
	'Budapest',
	'Skopje',
	'Rotterdam',
	'Valencia',
	'Vancouver',
	'Amsterdam',
	'Vienna',
	'Sydney',
	'New York City',
	'London',
	'Bangkok',
	'Hong Kong',
	'Dubai',
	'Rome',
	'Istanbul',
];

const searchCities = (searchString) => {

    if (searchString === '*') { return cities }

	if (searchString.length < 2) { return 'no results' }

    const searchResults = cities.filter((city) => city.toLowerCase().includes(searchString.toLowerCase()));
    
	return searchResults;
};

module.exports = { searchCities, cities };
