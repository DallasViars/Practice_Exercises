/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    const index = arr.findIndex((item)=> func(item))
    return index < 0 ? [] : arr.slice(index)
};

console.log(
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})
);


//Test problems:
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log("// should return [3, 4]");
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log("// should return [1, 0, 1]");
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
console.log("// should return [1, 2, 3]");
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log("// should return []");
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
console.log("// should return [7, 4]");
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
console.log("// should return [3, 9, 2]");

