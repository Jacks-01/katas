class StringCalculator {
	//* Add Method
	add(numberString) {
		if (numberString.length > 0) {
			const numbersArray = this.parseString(numberString);
			console.log(numbersArray);

			const totalSum = numbersArray.reduce((sum, number) => {
				return sum + number;
			}, 0);

			return totalSum;
		}

		return 0; // Guard Clause
	}

    parseString(numberString) {
        
		if (isNaN(parseInt(numberString.charAt(numberString.length - 1)))) {
			throw new Error('Error');
        }
        const stringDelimiter = stringArray.charAt(3); 
		const stringArray = numberString.split(stringDelimiter); // split the string into an array to add each value

		let numbersArray = stringArray.map((element) => {
			return parseInt(element);
		});

		return numbersArray;
	}
}

module.exports = StringCalculator;
