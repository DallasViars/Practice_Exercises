function countVowelConsonant(str) {
  return str.split("").map(letterValuer).reduce((prev, current) => prev + current);
  
}

function letterValuer(letter) {
    const vowels = /[aeiou]/i
    return letter.match(vowels) ? 1 : 2;
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});