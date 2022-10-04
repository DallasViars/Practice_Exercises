/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str, newStr = str, allMissing="") {
  const start = str.charCodeAt(0)
  const end = str.charCodeAt(str.length-1)
  let inc = 0;
  for (let i = start; i <= end; i++) {
    if (i != newStr.charCodeAt(inc)) { 
      let missing = String.fromCharCode(i)
      allMissing += String.fromCharCode(i)
      newStr = newStr.substring(0, inc) + missing + newStr.substring(inc)
    }
    inc++;
  }
  return allMissing || undefined;
}



//Test problems:
console.log(fearNotLetter("abce"))
console.log("d");
console.log(fearNotLetter("abcdefghjklmno"))
console.log("i");
console.log(fearNotLetter("stvwx"))
console.log("u");
console.log(fearNotLetter("bcdf"))
console.log("e");
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
console.log("undefined");