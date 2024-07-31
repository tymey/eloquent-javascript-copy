////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives two numbers.
 * O: The function returns the smaller of the two numbers.
 * C: N/A
 * E: What if they are the same number?
 *    - Return the first argument.
 */

function min(num1, num2) {
  // Check if num1 === num2 (Edge Case) OR num1 < num2
  if (num1 === num2 || num1 < num2) {
    // Return num1
    return num1;
  // Else, return num2
  } else {
    return num2;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a whole number.
 * O: The function returns true if input number is even; otherwise, returns false.
 * C: Must use recursion.
 * E: What if the input number is negative?
 *    - Write code to add two until it reaches 0 or 1.
 */

function isEven(num) {
  // Check if num is negative
  if (num < 0) {
    // If true, return the invocation of isEven with (num + 2)
    return isEven(num + 2);
  // Check else if num === 0
  } else if (num === 0) {
    // Return true
    return true;
  // Check else if num === 1
  } else if (num === 1) {
    // Return false
    return false;
  // Else, return the invocation of isEven with (num - 2)
  } else {
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a string and a target letter (string).
 * O: The function returns the number of input target letters in input string.
 * C: N/A
 * E: N/A
 */

function countChars(string, target) {
  // Initialize count variable with 0
  let count = 0;
  // Iterate through the letters of the input string
  // Declare for loop using i; Start: 0; Stop: string.length; Increment by 1 each loop
  for (let i = 0; i < string.length; i++) {
    // Check if string[i] === target
    if (string[i] === target) {
      // If true, add 1 to count and reassign
      count += 1;
    }
  }
  // After loop completes, return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a string.
 * O: The function returns a number representing how many capital B's are in the input string.
 * C: N/A
 * E: N/A
 */

function countBs(string) {
  // Initialize count variable with 0
  let count = 0;
  // Iterate through the letters of the input string
  // Declare for loop using i; Start: 0; Stop: string.length; Increment by 1 each loop
  for (let i = 0; i < string.length; i++) {
    // Check if string[i] === 'B'
    if (string[i] === 'B') {
      // If true, add 1 to count and reassign
      count += 1;
    }
  }
  // After loop completes, return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};