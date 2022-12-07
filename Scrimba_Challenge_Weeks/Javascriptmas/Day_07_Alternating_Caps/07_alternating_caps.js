/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/
const btn = document.querySelector(".btn")
const textarea = document.querySelector("textarea")
const altCapsEl = document.querySelector(".alt-caps")

btn.addEventListener("click", function() { checkAltCaps() } )
textarea.addEventListener("keyup", function(e) {
    if (e.code === "Enter" || e.code === "NumpadEnter" ) {
        checkAltCaps();
    }
})

function checkAltCaps(str = "") {
    if (str === "" && textarea.value === "") {
        altCaps(textarea.placeholder);
    } else if (str === "") {
        altCaps(textarea.value.toString());
    }
}

function altCaps(str) {
    let regex = /\w/i;
    let i = 0;
    const newStr = str.split("").map(character => {
        if (character.match(regex)) {
            i++;
            return i % 2 === 1 ? character.toUpperCase() : character.toLowerCase();
        }
        return character;
    }).join("");
    renderAltCaps(newStr);
}

function renderAltCaps(text) {
    textarea.value = "";
    altCapsEl.textContent = "";
    altCapsEl.textContent = text;
}
altCaps("When you visit Portland you have to go to VooDoo Donuts");