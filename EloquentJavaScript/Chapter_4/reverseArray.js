/* Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster? */

"use strict";
let reverseArray = (arr) => {
  let reverseArr = [];
  for (let cnt = arr.length - 1; cnt >= 0; cnt--) {
    reverseArr.push(arr[cnt]);
  }

  return reverseArr;
};

let reverseArrayInPlace = (arr) => {
  let reverseArrayInPlace = [];
  for (let cnt = arr.length - 1; cnt >= 0; cnt--) {
    reverseArrayInPlace.push(arr[cnt]);
  }

  return reverseArrayInPlace;
};

console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArrayInPlace(["c", "b", "a", "d", "e", "f"]));
