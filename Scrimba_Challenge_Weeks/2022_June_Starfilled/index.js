// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM. 
// Note: This requires very little code!

// Stretch goals:
// - 1. Ensure that the stars always fill each line
// - 2. Add different sizes of star 

//Declaring constants
const stars = ["🌟", "✨", "⭐"]; //Chose an array in case I wanted to expand the possible stars
const galaxy = document.getElementById("galaxy")

//Functions
function randNum(min = 0, max = stars.length-1) { 
    //Wanted this function to be flexible enough to handle varying array lengths and be able to handle any integers I may pass to it in the future
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function starFilld() { // I wanted a punny name
  //This creates an array of randomized stars 700 long. I chose 700 since that covers as many stars as needed to fill my monitor. I chose to use spans instead of paragraphs since this renders a string of emojis and has no real, semantic meaning.
  let starArr = new Array(1500).fill(0).map(function() {
    return `<span class="star">${stars[randNum()]}</span>`
  });
  galaxy.innerHTML = starArr.join(""); 
  const starSelect = document.getElementsByClassName("star")
}

starFilld();
