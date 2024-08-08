// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////



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
}

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
}

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
  // Split text with ('') and map each character to its UNICODE in a new array and assign it textCodeArr
  let textCodeArr = text.split('').map(x => x.codePointAt(0));
  // Initialize count object with keys 'ltr', 'rtl', & 'ttb' all assigned with the value of 0
  let count = { 'ltr': 0, 'rtl': 0, 'ttb': 0 };
  // Iterate through SCRIPTS array with a for-of loop using script for each object in the array
  for (let script of SCRIPTS) {
    // Iterate through each script's ranges array using i
    for (let i = 0; i < script.ranges.length; i++) {
      // Iterate through textCodeArr using j
      for (let j = 0; j < textCodeArr.length; j++) {
        // Check if textCodeArr[j] is within the range of script.ranges[i]
        if (textCodeArr[j] >= script.ranges[i][0] && textCodeArr[j] <= script.ranges[i][1])
          // Update the count object by adding one and reassigning to the key that matches the script's direction
          count[script.direction] += 1;
      }
    }
  }
  // Declare dominant variable
  let dominant;
  // Initialize dominantCount variable with 0
  let dominantCount = 0;
  // Iterate through count object using key for count's keys
  for (let key in count) {
    // Check if count[key] is greater than dominantCount
    if (count[key] > dominantCount) {
      // Reassign dominantCount to count[key]
      dominantCount = count[key];
      // Reassign dominant to key
      dominant = key;
    }
  }
  // Return dominant
  return dominant;
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