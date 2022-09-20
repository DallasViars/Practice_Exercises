/* Possible background-positions and counter to iterate through them */
const myArray = ["top right", "bottom left", "bottom right", "top left"]
let arrayCounter = 0;

document.getElementById("btn-bored").addEventListener("click", function() {
  document.getElementById("body").style.backgroundPosition = myArray[arrayCounter];
  document.getElementById("activity-info").innerHTML = `
  <div><h2>Hmm... let me think...</h2></div>`;
  arrayCounter++;
  if (arrayCounter >= myArray.length) { arrayCounter = 0; }

/* Grabs activity info from Scrimba's bored API */
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      Object.assign(this, data);
      const {activity, type, participants, price, link, accessibility} = this;
    const cost = price.toFixed(2)*100 <= 0 ? `is free` 
      : price.toFixed(2)*100 < 20 ? `is inexpensive`
      : `can be somewhat expensive`;
    const people = participants > 1 ? `people` : `person`
    
    /* Sets a short delay before displaying activity information */
    const myTimeout = setTimeout(function() {

      /* Formatting if the API does not return a link for the activity */      
      if (!link) {
        document.getElementById("activity-info").innerHTML = `
          <div><h2>${activity}</div>
          <div><p>This activity involves ${participants} ${people}, and ${cost}</p></div>
        `;

      /* Formatting if the API does return a link for the activity */
      } else {
        document.getElementById("activity-info").innerHTML = `
         <div><h2><a href="${link}">${activity}</a></h2></div>
         <div style="text-align: center;"><p>This activity involves ${participants} ${people}, and ${cost}</p></div>
        `;
      }
    }, 1700)
  });
})