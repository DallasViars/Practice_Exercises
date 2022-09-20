//Each question in the FAQ is posed w/i an h3 tag, this const grabs all h3 elements in order to call showText() when it is clicked
const dropdowns = document.querySelectorAll("h3");

//Since the arrow beside each question is in a different element, this const grabs all buttons in order to call showText() when it is clicked
const buttons = document.querySelectorAll(".button");

//These for loops add event listeners to the h3 and buttons stored in the consts dropdowns and buttons
for (section of dropdowns) {
  section.addEventListener("click", function() {
    showText("section");
  }, true);
}
for (button of buttons) {
  button.addEventListener("click", function() {
    showText("button");
  }, true);
}

//This function hides all elements with the class "hide-text" so only one portion of the FAQ can be open at a time
function hideText() {
  document.body.style.overflow = "hidden";
  const hideTargets = document.querySelectorAll("h3 + p:not(hide-text)");
  for (visible of hideTargets) {
    visible.classList.add("hide-text");
  }
} 

//This function toggles to show/hide the answer to the FAQ question
function showText(elem) {
  console.log(event.target);
  let target="";
  if (elem == "section") {
    target = event.target.nextElementSibling;
  } 
  if (elem == "button") {
    target = event.target.parentNode.parentNode.children[0].children[1];
  }
  
  const wasVisible = !target.classList.contains("hide-text");
  hideText();
  
  if (!wasVisible) {
    target.classList.remove("hide-text");
  }
}
