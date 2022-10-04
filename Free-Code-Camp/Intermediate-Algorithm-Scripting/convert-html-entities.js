/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

const html = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
}

function convertHTML(str) {
  return str.split("").map(char => html[char] ? html[char] : char).join("")
}


//Test problems:
console.log(convertHTML("Dolce & Gabbana"));
console.log("Dolce &amp; Gabbana");
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log("Hamburgers &lt; Pizza &lt; Tacos");
console.log(convertHTML("Sixty > twelve"));
console.log("Sixty &gt; twelve");
console.log(convertHTML('Stuff in "quotation marks"'));
console.log("Stuff in &quot;quotation marks&quot;");
console.log(convertHTML("Schindler's List"));
console.log("Schindler&apos;s List");
console.log(convertHTML("<>"));
console.log("&lt;&gt;");
console.log(convertHTML("abc"));
console.log("abc");