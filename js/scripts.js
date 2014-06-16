var scrabbleScore = function (word) {
	var valueOne = /[aeioulnrstAEIOULNRST]/;
	var valueTwo = /[dg]/;
	var valueThree = /[bcmp]/;
	var wordValue = 0;
		for (var index = 0; index < word.length; index++) {
			if (valueOne.test(word.charAt(index))) {
					wordValue += 1;
		
			} else if (valueTwo.test(word.charAt(index))) {
				wordValue += 2;
			} else if (valueThree.test(word.charAt(index))) {
				wordValue += 3;
			}
		} return wordValue;
};
