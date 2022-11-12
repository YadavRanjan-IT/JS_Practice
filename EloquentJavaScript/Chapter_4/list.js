"use strict";

let arrayToList = (arr) => {
  let list = null;
  for (let n = arr.length - 1; n >= 0; n--) {
    list = {
      value: arr[n],
      rest: list,
    };
  }

  return list;
};

console.log(arrayToList([1, 2, 3]));
