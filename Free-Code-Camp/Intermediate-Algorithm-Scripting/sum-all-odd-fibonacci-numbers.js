/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let num1 = 1;
    let num2 = 1;
    let sum = 0;
    let seq = [1];
    while (sum <= num) {
        if (num2 % 2 === 1) seq.push(num2)
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return seq.reduce((acc, num) => acc + num, 0);
}

  //Test problems: 
 console.log(sumFibs(1));
 console.log("// should return a number.");
 console.log(sumFibs(1000));
 console.log("// should return 1785.");
 console.log(sumFibs(4000000));
 console.log("// should return 4613732.");
 console.log(sumFibs(4));
 console.log("// should return 5.");
 console.log(sumFibs(75024));
 console.log("// should return 60696.");
 console.log(sumFibs(75025));
 console.log("// should return 135721");