/*
Description and history: A lesson on Scrimba introduced setTimeout functions and I found them to be interesting so I looked into them further and learned about setInteral functions. About the same time I learned that border-radius in CSS doesn't simply take one parameter, but up to eight! I decided to combine these items into one small project.

Future plans: Exploring ways to remove the prevalence of straight lines in the border
*/

/* Global variable declarations */
const theStory = [
    `Once upon a time`,
    `A beautiful princess met a handsome prince.`, 
    `But, before they could marry`,
    `The princess's wicked stepmother put a curse on them`, 
    `They searched desperately looking for an end to the curse`,
    `Neither the royal wizard, nor back alley magicians could lift the curse`,
    `They traveled to neighboring kingdoms, to no avail`,
    `The braved treacherous oceans and mountains`,
    `Still they found no cure`,
    `Defeated, they set out for home`,
    `Upon the road they encountered a kind family`,
    `The family listened to their tale and was moved by their trials`,
    `Working together the family wove a spell`,
    `And they were able to lift the curse`,
    `The stepmother was exiled for her wicked deed`,
    `Grateful for their help, they rewarded the family`,
    `The prince and princess married on a beautiful summer's day.`, 
    `In the end, they lived happily ever after.`,
    ``,
    `The End`,
    ``,
  ]
  const vertical = ["top", "center", "bottom"]
  let play = document.getElementsByClassName("border-transitions");
  let count = 0
  
  /* Controls the timing of the story */
  let myInterval = setInterval(()=> {
    if (count >= theStory.length) count = 0;
    console.clear();
    document.getElementById("story").textContent = theStory[count];
    count++;
  }, 3500)
  
  /* Basic random number generator */
  function randNum(min=0, max=100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /* Controls the timing and shape of the border */
  let thisInterval = setInterval(() => {
    play[0].style.borderRadius = `${randNum(0, 100)}% ${randNum(0, 100)}% ${randNum(0, 100)}% ${randNum(0, 100)}% / ${randNum(0, 100)}% ${randNum(0, 100)}% ${randNum(0, 100)}% ${randNum(0, 100)}%`
    play[0].style.transform = `scale(${randNum(7, 10)/10}`;
    play[0].style.backgroundPosition = `${vertical[randNum(0,vertical.length)]} ${randNum()}%`;
  }, 750);