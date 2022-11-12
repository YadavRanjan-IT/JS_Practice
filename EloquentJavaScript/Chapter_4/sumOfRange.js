/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


*/

"use strict";
let range = (start, end) => {
  let arr = [start];
  while (start < end) {
    arr.push(start + 1);
    start++;
  }

  return arr;
};

console.log(range(1, 10));

let sum = (arr) => {
  let sum = 0;
  while (arr.length !== 0) {
    sum += arr.pop();
  }
  return sum;
};

let num = range(1, 10);
console.log(sum(num));
