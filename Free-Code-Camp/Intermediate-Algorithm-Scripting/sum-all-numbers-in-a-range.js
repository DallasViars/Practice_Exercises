/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let startNum = arr[0];
  let endNum = arr[1];
  let diff = Math.abs(startNum - endNum) + 1;
  return ((startNum + endNum) * diff)/2;
}


//Test problems:
console.log(sumAll([1, 4]));
//should return a number

console.log(sumAll([1, 4]));
//should return 10

console.log(sumAll([4, 1]));
//should return 10

console.log(sumAll([5, 10]));
//should return 45

console.log(sumAll([10, 5]));
//should return 45