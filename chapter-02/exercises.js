
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

/**
 * I: The function receives a number representing the size of a triangle.
 * O: The function logs a triangle line by line using one more "#" each line
 *    until it reached the input number of lines.
 * C: N/A
 * E: N/A
 */

function triangles(x) {
  // Declare for loop using i; Start: 0; Stop: x; Increment by 1 each loop
  for (var i = 0; i < x; i++) {
    // Initialize string variable with an empty string
    var string = "";
    // Declare for loop using j; Start: 0; Stop: i + 1; Increment by 1 each loop
    for (var j = 0; j < i + 1; j++) {
      // Concatenate and reassign string with "#"
      string += "#";
    }
    // Log string to the console
    console.log(string);
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

/**
 * I: The function receives two numbers representing the start and end of a range.
 * O: The function logs every number from the start to the end of the range following these rules:
      - if the number is divisible by 3, log "fizz"
      - if the number is divisible by 5, log "buzz"
      - if the number is divisible by both 3 & 5, log "fizzbuzz"
      - if the number is not divisible by 3 or 5, log the number
 * C: N/A
 * E: N/A
 */

function fizzBuzz(start, end) {
  // Declare for loop using i; Start: start; Stop(inclusive): end; Increment by 1 each loop
  for (var i = start; i <= end; i++) {
    // Check if i is divisible by 3 AND 5
    if (i % 3 === 0 && i % 5 === 0) {
      // Log "fizzbuzz" to the console
      console.log("fizzbuzz");
    // Check else if i is divisible by 3
    } else if (i % 3 === 0) {
      // Log "fizz" to the console
      console.log("fizz");
    // Check else if i is divisble by 5
    } else if (i % 5 === 0) {
      // Log "buzz" to the console
      console.log("buzz");
    // Else, log i to the console
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

/**
 * I: The function receives a number representing the dimensions of a chessboard.
 * O: The function logs a string with line breaks that simulates a chessboard using "#" & " "
 * C: N/A
 * E: N/A
 */

function drawChessboard(x) {
  // Initialize chessArray variable with an empty array
  var chessArray = [];
  // Declare for loop using i; Start: 0; Stop: x; Increment by 1 each loop
  for (var i = 0; i < x; i++) {
    // Initialize string variable with an empty string
    var string = "";
    // Declare for loop using j; Start: 0; Stop: x; Increment by 1 each loop
    for (var j = 0; j < x; j++) {
      // Check if i + j is even
      if ((i + j) % 2 === 0) {
        // Concatenate and reassign string with "#"
        string += " ";
      // Else, concatenate and reassign string with " " (space)
      } else {
        string += "#";
      }
    }
    // Push string into chessArray
    chessArray.push(string);
  }
  // Solution seems to need an extra line at the end that is empty.
  // Push "" into chessArray
  chessArray.push("");
  // Return the joining of chessArray with a line break (\n)
  console.log(chessArray.join("\n"));
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}