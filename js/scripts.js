var scrabbleScore = function (word) {
	var valueOne = /[aeioulnrstAEIOULNRST]/;
	var valueTwo = /[dg]/;
	var valueThree = /[bcmp]/;
	var valueFour = /[fhvwy]/;
	var valueFive = /[k]/;
	var wordValue = 0;
		for (var index = 0; index < word.length; index++) {
			if (valueOne.test(word.charAt(index))) {
					wordValue += 1;
		
			} else if (valueTwo.test(word.charAt(index))) {
				wordValue += 2;
			} else if (valueThree.test(word.charAt(index))) {
				wordValue += 3;
			} else if (valueFour.test(word.charAt(index))) {
				wordValue += 4;
			} else if (valueFive.test(word.charAt(index))) {
				wordValue += 5;
			}
		} return wordValue;
};
