// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

const { characterScript } = require("./helpers");

/**
 * I: The function receives an array of arrays.
 * O: The function returns an array of all of the elements throughout the input
 *    array of arrays without any nested arrays.
 * C: Must use the reduce() method and the concat() method.
 * E: N/A
 */

function flatten(array) {
  /* Reduce input array down to a single array by concating acc (array
     accumulated so far) with elem (the next element) and an empty array
     for a seed */
  return array.reduce((acc, elem) => acc.concat(elem), []);
};

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a value, a test function, and an update function, and
 *    a body function.
 * O: The function acts like a for loop. Each iteration, it should first run the 
 *    test function on the current loop value and stop if that returns false. It
 *    should then call the body function, giving it the current value, and finally
 *    call the update function to create a new value and start over from the beginning.
 * C: Don't use a loop.
 * E: N/A
 */

function loop(value, test, update, body) {
  // BASE:
  // Check if invoking test() with value yields false.
  if (!test(value)) {
    // Return the function to end it.
    return;
  }
  // RECURSION:
  // Invoke body() with value
  body(value);
  // Return the recursive call of loop() with update(value), test, update, & body
  return loop(update(value), test, update, body);
}; 

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array and a predicate function.
 * O: The function returns true if the input predicate function returns true when
 *    invoked with every element of the input array.
 * C: Must use the .some() method.
 * E: N/A
 */

function every(array, test) {
  // BASE: 
  // Check if array's length is 0
  if (array.length === 0) {
    // Return true
    return true;
  /* Check if the .some() method returns false when invoked with the input array
     and the input test function */
  } else if (!array.some(test)) {
    // Return false
    return false;
  }
  // RECURSION:
  // Return the recursive call of every() with array.slice(1) & test
  return every(array.slice(1), test);
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a string of text.
 * O: The function returns "ltr" if the majority of the characters in the input
 *    text are primarily written left-to-right, "rtl" if they're written right-
 *    to-left, and "ttb" if they're written top-to-bottom.
 * C: N/A
 * E: N/A
 */

function dominantDirection(text) {
  
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};