var scrabbleScore = function (word) {
	var valueOne = /[aeioulnrstAEIOULNRST]/;
	var valueTwo = /[dg]/;
	var wordValue = 0;
		for (var index = 0; index < word.length; index++) {
			if (valueOne.test(word.charAt(index))) {
					wordValue += 1;
		
			} else if (valueTwo.test(word.charAt(index))) {
				wordValue += 2;
			}
		} return wordValue;
};
