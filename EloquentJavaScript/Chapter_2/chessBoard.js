/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// Write a Loop that iterates 8 times
// Write a nested loop that iterates 8 times on every iteration of first loop
// If cnt is Odd start with "#", if cnt is Even start with " "
// Use a prompt func and store the value in size var as number
// Use var size to replace 8

"use stict";

let size = Number(prompt("Give the size of ChessBoard:"));

for (let cnt = 1; cnt <= size; cnt++) {
  //console.log(cnt);
  let chessBoard = "";
  for (let count = 1; count <= size; count++) {
    //chessBoard += count;
    if (cnt % 2 !== 0) {
      if (count % 2 !== 0) {
        chessBoard += "#";
      } else {
        chessBoard += " ";
      }
    } else {
      if (count % 2 !== 0) {
        chessBoard += " ";
      } else {
        chessBoard += "#";
      }
    }
  }
  console.log(chessBoard);
}

// Another way
console.log("Another way");
/*
Also create a global var chessboard and add newline after every last iteration of 2nd loop 
*/
let chessboard = "";

for (let i = 1; i <= size; i++) {
  //let chessBoard = "";
  for (let j = 1; j <= size; j++) {
    if ((i + j) % 2 === 0) {
      chessboard += "#";
    } else {
      chessboard += " ";
    }

    if (j === size) {
      chessboard += "\n";
    }
  }
}

console.log(chessboard);
