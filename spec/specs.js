describe('scrabbleScore', function () {
	it('calculates the scrabble score for a word that contains some amount of letters of value one(1) (a, e, i, o, u, l, n, r, s, t)', function() {
		scrabbleScore('aeioulnrst').should.equal(10);
	});
	it('calculates the scrabble score for a word containing some amount of letters of value two(2) (d, g)', function () {
		scrabbleScore('dog').should.equal(4);
	});
});