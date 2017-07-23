/**
* Function: "zipUserCart"
* 1) Defines a "zip" function.
* - a) establishes a counter & results variables.
* - b) creates a for loop, whose length is restricted to the shortest array.
* - c) dynamically assigns at index "counter" the result of the "combinerFunction".
* - d) returns result.
* 2) calls the "zip" func. passing in the array with qty's and id's of products in the users cart as "userCartIdsAndQtys", as well as the resulting array from fetching the entire product object by id, inside the userCart array.
* 3) Using the two arrays from step 2, creates a "combinerFunction" that takes the "qty" value from the first array, and the product info & _id from the second array, and returns a new object with those values.
*
* @param {object} userProfile - The current user profile object.
* @param {array} multipleProducts - multiple product arrays.
*
* @return {array} updatedProducts - See step 2.
*/
const zipUserCart = (userCartIdsAndQtys, productsArray) => {
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

  return zip(userCartIdsAndQtys, productsArray, ({ qty }, productObj) => ({
    qty,
    ...productObj,
  }));
};

export default zipUserCart;
