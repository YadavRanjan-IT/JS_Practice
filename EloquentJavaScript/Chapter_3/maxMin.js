/* 
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum. 
*/
"use strict";
let min = (num1, num2) => (num1 < num2 ? num1 : num2);

console.log(min(-1, -8));
console.log(min(1, 8));
console.log(min(1, 0));

function min2(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(min2(-1, -8));
console.log(min2(1, 8));
console.log(min2(1, 0));
