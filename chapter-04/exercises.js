////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives two numbers, one a start for a range and the other
 *    an end for a range. There is also a third optional number that represents
 *    what to step when creating an array of the numbers in this range.
 * O: The function returns an array of the numbers within the input range.
 * C: N/A
 * E: If the start and end are the same, return an empty array. If the step 
 *    argument is positive and start is larger than end, return an empty array.
 *    If the step argument is negative and start is smaller than end, return
 *    an empty array.
 */

function range(start, end, step = 1) {
  // Initialize output variable with an empty array
  let output = [];
  // EDGE CASES:
  // Check if start === end
  if (start === end) {
    // Return output
    return output;
  // Check else if the step doesn't make sense with given range
  } else if ((start < end && step < 0) || (start > end && step > 0)) {
    // Return output
    return output;
  }
  // EXPECTED FUNCTION:
  // Declare for loop using i; start: start; stop(inclusive): end; Step: i += step
  for (let i = start; i <= end; i += step) {
    // Push i into output array
    output.push(i);
  }
  // Return output
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array of numbers.
 * O: The function returns the sum of the numbers in the input array.
 * C: N/A
 * E: N/A
 */

function sum(array) {
  // Initialize output variable with 0
  let output = 0;
  // Iterate through array using for loop
  for (let i = 0; i < array.length; i++) {
    // Add array[i] to output and reassign
    output += array[i];
  }
  // Return output
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array.
 * O: The function returns a new array with the elements of the input array in
 *    reverse order.
 * C: Cannot use the standard reverse method.
 * E: N/A
 */

function reverseArray(array) {
  // Initialize output variable with an empty array
  let output = [];
  // Iterate through array using a for loop
  for (let i = 0; i < array.length; i++) {
    // Unshift array[i] into output array
    output.unshift(array[i]);
  }
  // Return output
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array.
 * O: The function modifies input array modified with its elements in reverse order.
 * C: Cannot use the standard reverse method.
 * E: N/A
 */

function reverseArrayInPlace(array) {
  // Initialize reverseCopy variable with the result of invoking reverseArray with array
  let reverseCopy = reverseArray(array);
  // Iterate through reverseCopy using a for loop
  for (let i = 0; i < reverseCopy.length; i++) {
    // Reassign array[i] to equal reverseCopy[i]
    array[i] = reverseCopy[i];
  }
  // Return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array.
 * O: The function returns an object of nested objects containing each element
 *    of the input array with the last element being the most nested and the first
 *    element being the least nested.
 * C: N/A
 * E: N/A
 */

function arrayToList(array) {
  /* Initialize output variable with an object containing the following: 
      - value: array[array.length - 1] 
      - rest: null */
  let output = {
    value: array[array.length - 1],
    rest: null
  };
  // Iterate through array using a for loop
  for (let i = array.length - 2; i >= 0; i--) {
    /* Reassign output with an object containing the following: 
        - value: array[i] 
        - rest: output */
    output = {
      value: array[i],
      rest: output
    };
  }
  // Return output
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an object resembling a list structure.
 * O: The function returns an array of the input object list with the least nested
 *    value first and the most nested value last.
 * C: N/A
 * E: N/A
 */

function listToArray(list, output = []) {
  // BASE:
  if (list === null) {
    // Return output
    return output;
  }
  // RECURSION:
  // Push list.value into output array
  output.push(list.value);
  // Return recursive call of listToArray() with list.rest & output
  return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives a value and an object list.
 * O: The function returns a new object list that adds the input value to the 
 *    front of the input object list.
 * C: N/A
 * E: N/A
 */

function prepend(value, list) {
  // Initialize listArray variable with the result of invoking listToArray() with list
  let listArray = listToArray(list);
  // Unshift value into listArray array
  listArray.unshift(value);
  // Return the result of invoking arrayToList() with listArray
  return arrayToList(listArray);
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an object list and a number representing a position
 *    in an object list with zero being the first element.
 * O: The function returns the element in the given input number position within
 *    the input object list.
 * C: Use recursion.
 * E: Should return undefined when there is no such element.
 */

function nth(list, position) {
  // EDGE CASE:
  // Check if position is negative OR list is null
  if (position < 0 || list === null) {
    // return undefined
    return undefined;
  }
  // BASE:
  // Check if position is 0
  if (position === 0) {
    // Return list.value
    return list.value;
  }
  // RECURSION:
  // Return the recursive call of nth() with list.rest & position - 1
  return nth(list.rest, position - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: The function receives two values.
 * O: The function returns true only if they are the same value or are objects
 *    with the same properties, where the values of the properties are equal when 
 *    compared with a recursive call to deepEqual().
 * C: Must use recursion.
 * E: N/A
 */

function deepEqual(val1, val2) {
  // BASE:
  // Check if val1 & val2 are different types
  if (typeof val1 !== typeof val2) {
    // Return false
    return false;
  // Check else if val1 & val2 are not objects AND they yield the same string with typeof
  } else if ((typeof val1 === typeof val2) && (typeof val1 !== 'object')) {
    // return the strict comparison between val1 & val2
    return val1 === val2;
  // Check else if val1 & val2 are BOTH null
  } else if (val1 === null && val2 === null) {
    // Return true
    return true;
  }
  // RECURSION:
  // Iterate through Object.keys(val1) using a for loop
  for (let i = 0; i < Object.keys(val1).length; i++) {
    // Check if recursive calling deepEqual() with Object.keys(val1)[i] & Object.keys(val2)[i] returns false
    if (!(deepEqual(Object.keys(val1)[i], Object.keys(val2)[i]))) {
      // Return false
      return false;
    // Check else if recursive calling deepEqual() with val1[Object.keys(val1)[i]] & val2[Object.keys(val2)[i]] returns false
    } else if (!(deepEqual(val1[Object.keys(val1)[i]], val2[Object.keys(val2)[i]]))) {
      // Return false
      return false;
    }
  }
  // Return true
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};