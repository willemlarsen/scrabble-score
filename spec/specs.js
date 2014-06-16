describe('scrabbleScore', function () {
	it('calculates the scrabble score for a word that contains some amount of letters of value one(1) (a, e, i, o, u, l, n, r, s, t)', function() {
		scrabbleScore('aeioulnrst').should.equal(10);
	});
	it('calculates the scrabble score for a word containing some amount of letters of value two(2) (d, g)', function () {
		scrabbleScore('dg').should.equal(4);
	});
	it('calculates the scrabble score for a word containing some amount of letters of value three(3), (b, c, m, p)', function () {
		scrabbleScore('bcmp').should.equal(12);
	});
	it('calculates the scrabble score for a word containing some amount of letters of value four(4), (f, h, v, w, y)', function() {
		scrabbleScore('fhvwy').should.equal(20);
	});
});