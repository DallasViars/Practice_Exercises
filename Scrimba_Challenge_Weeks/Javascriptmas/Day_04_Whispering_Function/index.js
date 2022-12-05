/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
// Photo by Khangnht98 | Nocte: https://www.pexels.com/photo/black-cat-lying-on-white-textile-9370681/

const btn = document.querySelector(".btn");
const whisperInput = document.querySelector("input");

btn.addEventListener("click", function() { whisper() });
whisperInput.addEventListener("keyup", function(e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") whisper();
})

function whisper(msg) {
    const whisperMsg = document.querySelector(".whisper-msg")
    let replaceRegex = /[!@#$%^&*\(\)?]+$/gi;
    let newMsg;
    console.log("msg", msg)
    if (msg) {
        newMsg = msg;
    } else {
        newMsg = whisperInput.value || whisperInput.placeholder;
    }
    console.log(newMsg)
    newMsg = "shh... " + newMsg.toString().toLowerCase().replace(replaceRegex, "");
    whisperMsg.textContent = newMsg;
    return newMsg;
}

// console.log(whisper("PLEASE STOP SHOUTING."));
// console.log(whisper("MA'AM, this is a Wendy's!"));