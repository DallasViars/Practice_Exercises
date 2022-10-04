/*
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  const consonantRegex = /^[bcdfghjlkmnpqrstvwxyz]+/;
  const vowelRegex = /^[aeiou]/;
  if (vowelRegex.test(str)) {
    return `${str}way`;
  } else {
    let replChar = str.match(consonantRegex);
    str += replChar[0] + "ay";
    let temp = str.split("").slice(replChar[0].length).join("");
    return temp;
  }
}


//Test problems:
console.log(translatePigLatin("california"));
//should return the string aliforniacay.

console.log(translatePigLatin("paragraphs"));
//should return the string aragraphspay.

console.log(translatePigLatin("glove"));
//should return the string oveglay.

console.log(translatePigLatin("algorithm"));
//should return the string algorithmway.

console.log(translatePigLatin("eight"));
//should return the string eightway.

//Should handle words where the first vowel comes in the middle of the word. 
console.log(translatePigLatin("schwartz"));
//should return the string artzschway.

//Should handle words without vowels. 
console.log(translatePigLatin("rhythm"));
//should return the string rhythmay.