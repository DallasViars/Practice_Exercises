const userInputInput = document.getElementById("user-input");
const conversionsDiv = document.getElementById("conversions");

function calculate() {
  const endValues = [];
  const formulas = [3.281, 0.305, 0.264, 3.785, 2.205, 0.454];
    /* formulas array index and order: 
    0 meters to feet, 
    1 feet to meters, 
    2 liters to gallons, 
    3 gallons to liters, 
    4 kilograms to pounds, 
    5 pounds to kilograms */
  if (userInputInput.value <= 0) {
    conversionsDiv.innerHTML = `<p class="error-msg"> You must use a number greater than 0</p>`;
    return;
  }
  formulas.map(x => {
    endValues.push((userInputInput.value * x).toFixed(3));
  });
  renderValues(endValues);
}

function renderValues(endValues) {
  let render = `
    <div class="container" id="length">
    <h2>Length - Meters / Feet</h2>
    <p class="p-format">${userInputInput.value} meters = ${endValues[0]} feet</p>
    <p class="p-format">${userInputInput.value} feet = ${endValues[1]} meters</p>
    </div>
    <div class="container" id="volume">
    <h2>Volume - Liters / Gallons</h2>
    <p class="p-format">${userInputInput.value} Liters = ${endValues[2]} gallons</p>
    <p class="p-format">${userInputInput.value} gallons = ${endValues[3]} Liters</p>
    </div>
    <div class="container" id="mass">
    <h2>Mass - Kilograms / Pounds</h2>
    <p class="p-format">${userInputInput.value} kilograms = ${endValues[4]} pounds</p>
    <p class="p-format">${userInputInput.value} pounds = ${endValues[5]} kilograms</p>
    </div>`;
  conversionsDiv.innerHTML = render;
}

calculate()