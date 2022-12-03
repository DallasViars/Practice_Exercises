/* Challenge 1: Favorite Foods
- Topic: Object Destructuring
1. Edit the faveFoods object so that it contains 
your favorite foods.
2. Destructure the faveFoods object into three consts: 
breakfast, lunch, and supper.
3. Fetch the meals <section> from the DOM.
4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I want usually want pizza 🍕.
*/

const mealsEl = document.getElementById("meals");

const faveFoods = {
    breakfast: "some bacon and hash browns",
    lunch: "a deli meat sandwich, chips, and an orange",
    supper: "a ribeye steak, baked potato, and steamed broccoli"
}


function getFaveFoods(faveFoods) {
    const {breakfast, lunch, supper} = faveFoods;
    mealsEl.innerHTML = `
    <p>For breakfast I really enjoy ${breakfast}.
    
    For lunch I usually have ${lunch}.
    
    And for dinner a special treat is ${supper}.</p>
    `;
}
let myInterval = setInterval(changeTextColor, 9000)

function randomNum(x) {
  return Math.floor(Math.random() * x);
}

function changeTextColor() {
  let myRGBText = `linear-gradient(${randomNum(360)}deg, rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)}), rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)}), rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)}))`
  mealsEl.style.backgroundImage = `${myRGBText}`
}

getFaveFoods(faveFoods);