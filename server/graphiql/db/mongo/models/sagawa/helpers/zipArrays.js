/**
* Function: "zip"
* 1) Iterates over 2 arrays simultaneously.
* 2) Iterations are limited to the input with the shortest array length.
*
* @param {array} left - Array of values.
* @param {array} right - Array of values.
*
* @return {array} results - New array of mixed values from the two input arrays.
*/
const zip = (left, right, combinerFunction) => {
  let counter;
  const results = [];

  for (
    counter = 0;
    counter < Math.min(left.length, right.length);
    counter += 1
  ) {
    results[counter] = combinerFunction(left[counter], right[counter]);
  }
  return results;
};

export default zip;
