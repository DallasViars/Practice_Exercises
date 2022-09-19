/*
Description and history: A colleague on Discord, Jared, asked for help in making buttons reusable for a game they were making that didn't involve activating and deactivation buttons through event listeners, this is a mock-up design I came up with as a possible solution for their work.
*/

/* Location Data*/
const locations = {
    "d. c.": {
      img: "https://assets.codepen.io/5515635/dc-jefferson-memorial.jpg",
      availDirs: {
        north: "pennsylvania",
        east: "maryland",
        west: "west virginia",
        south: "virginia"
      }
    },
    pennsylvania: {
      img: "https://assets.codepen.io/5515635/pennsylvania-liberty-bell.jpg",
      availDirs: {
        south: "d. c."
      }
    },
    maryland: {
      img: "https://assets.codepen.io/5515635/maryland-inner-harbor.webp",
      availDirs: {
        west: "d. c."
      }
    },
    virginia: {
      img: "https://assets.codepen.io/5515635/virginia-mcafee-knob.jpg",
      availDirs: {
        north: "d. c.",
      }
    },
    "west virginia": {
      img: "https://assets.codepen.io/5515635/west-virginia.jpg",
      availDirs: {
        east: "d. c."
    }
    }
  };
  
  /* Global Variable Declarations */
  const body = document.getElementById("body");
  const northBtn = document.getElementById("north");
  const eastBtn = document.getElementById("east");
  const westBtn = document.getElementById("west");
  const southBtn = document.getElementById("south");
  const mainDirsList = ["north", "west", "east", "south"];
  let currentLocation = "virginia";
  let availableDirections = [];
  
  /* Functions */
  function getAvailDirs() {
    availableDirections = Object.keys(locations[currentLocation].availDirs);
    
    for (x of availableDirections) {
      /* Loops through the available directions and enables buttons that 
      represent directions the user can go */
      document.getElementById(x).classList.remove("btn-not-avail");
      document.getElementById(x).disabled = false;
      
      for (y of mainDirsList) {
        /* This loops through all possible directions as defined by mainDirsList
        and if a direction is not found in availableDirections the corresponding
        button is disabled */
        if (availableDirections.indexOf(y) < 0) {
          document.getElementById(y).classList.add("btn-not-avail");   
          document.getElementById(y).disabled = true;
        }
      }
    }
  }
  function renderLocation() {
    document.getElementById("location").innerText = currentLocation;
    body.style.background = `url(${locations[currentLocation].img})`;
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    getAvailDirs()
  }
  
  
  /* Event Listeners */
  northBtn.addEventListener("click", function() {
    currentLocation = locations[currentLocation].availDirs.north;
    renderLocation();
  });
  westBtn.addEventListener("click", function() {
    currentLocation = locations[currentLocation].availDirs.west;
    renderLocation();
  });
  eastBtn.addEventListener("click", function() {
    currentLocation = locations[currentLocation].availDirs.east;
    renderLocation();
  });
  southBtn.addEventListener("click", function() {
    currentLocation = locations[currentLocation].availDirs.south;
    renderLocation();
  });
  
  /* Initial Function call */
  renderLocation();