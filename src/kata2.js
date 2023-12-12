class StringCalculator {
    //* Add Method
	add(numberString) {
        
        if (numberString.length > 0) {
            
            if (numberString.includes(',')) {
                return 'More than one number'
            }

            return parseInt(numberString);
        }

        return 0; // Guard Clause
        
	}
}

module.exports = StringCalculator;
