class StringCalculator {
    //* Add Method
	add(numberString) {
        
        if (numberString.length > 0) {
            
            const numbersArray = this.parseString(numberString);

            const totalSum = numbersArray.reduce((sum, number) => {
                return sum + number;
            }, 0)
           
            return totalSum;
        }

        return 0; // Guard Clause
        
    }
    
    parseString(numberString) {
        const stringArray = numberString.split(','); // split the string into an array to add each value

        let numbersArray = stringArray.map(element => {
            return parseInt(element);
        });
        
        return numbersArray;
    }
}

module.exports = StringCalculator;
