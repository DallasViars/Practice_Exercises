const wrapper = document.querySelector(".wrapper");
let rotation = 0;

function rotateWrapper() {
  const timer = setInterval(controlRotate, 50);
}
rotateWrapper()
function controlRotate() {
  rotation += 10;
  wrapper.style.transform = `rotate(${rotation}deg)`
}