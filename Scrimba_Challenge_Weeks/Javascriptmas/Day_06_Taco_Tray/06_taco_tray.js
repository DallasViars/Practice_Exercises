// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
  return new Array(randNum()).fill("🌮");
}

const randNum = () => { return Math.floor(Math.random()*10)+1 }

getRandomNumberOfTacos()
function putTacosOnTray() {
  return getRandomNumberOfTacos().map(function (taco) {
      return `<div class="taco">${taco}</div>`
  }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
