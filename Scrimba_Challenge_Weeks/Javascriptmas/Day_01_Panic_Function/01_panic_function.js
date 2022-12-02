/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/


// Test your function

function panic(userInput = "") {
  userInput = userInput ? userInput.toString() : prompt("What are you panicking about?") || "";
  userInput = prettify(userInput) || ""
  return userInput ? userInput.split(" ").join(" 😱 ").toUpperCase().replace(/[@#$%^&*(),.?!]+$/gi, "").concat("!") : undefined;
}

function prettify(phrase) {
  let rejectRegex = /^\s+$/gi;
  let spacesRegex = /\s\s+/gi
  let replaceRegex = /[,.?!]/gi
  phrase = phrase.replace(replaceRegex, "!").replace(spacesRegex, " ")
  return phrase.match(rejectRegex) ? undefined : phrase.trim();
}


console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))