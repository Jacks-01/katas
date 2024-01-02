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

    if (searchString.length < 2) { return 'no results'; }
    
    return 'no results';
}


module.exports = {searchCities, cities}