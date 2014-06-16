var scrabbleScore = function (word) {
	function letterValues(letters, score) {
		this.letters = letters;
		this.score = score;
	}

	var valueOne = new letterValues(/[aeioulnrstAEIOULNRST]/, 1);

	var valueTwo = new letterValues(/[dgDG]/, 2);
	
	var valueThree = new letterValues(/[bcmpBCMP]/, 3);
	
	var valueFour = new letterValues(/[fhvwyFHVWY]/, 4);

	var valueFive = new letterValues(/[kK]/, 5);

	var valueSix = new letterValues(/[jxJX]/, 6);

	var valueTen = new letterValues(/[qzQZ]/, 10);
	
	var wordValue = 0;

	for (var index = 0; index < word.length; index++) {
		if (valueOne['letters'].test(word.charAt(0))) {
			wordValue = wordValue + valueOne['score'];
		}
	} return wordValue;
};
