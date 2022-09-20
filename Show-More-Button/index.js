const test = document.getElementById("test-overflow");
const button = document.getElementById("myButton");

//Allow for keeping track on whether the test div is visible
let visible = false;

test.addEventListener("keypress", showBtn);
button.addEventListener("click", showOverflow)

//Shows the button if there is overflow in the test div
function showBtn() {
  if (test.scrollHeight > test.offsetHeight) {
    button.style.display = "inline-block";
  } else {
    button.style.display = "none";
  }
}

//Toggles showing the overflow text in the test div
function showOverflow() {
  if (!visible) {
    test.style.maxHeight = "100%";
  } else {
    test.style.maxHeight = "5em"
  }
  visible = !visible;
}

showBtn();