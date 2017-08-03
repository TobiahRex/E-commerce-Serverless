const example = {
  __typename: 'layer1',
  layer1Name: 'toby',
  entry1: {
    __typename: 'layer2',
    layer2Name: 'tobiah',
    entry2: [{
      __typename: 'layer3',
      layer3Name: 'tobiah rex',
    }, {
      __typename: 'layer3',
      layer3Name: 'bickley',
    }],
  },
};

/**
* Function: "cleanOffTypename"
* - Takes any input, but acts only on an object.  Looks through each key, if a key is "__typename" then the key and value are removed.  If the key is a nested property, then the nested property is recursively called and the same evaluation takes place.
* 1) Ensure type is an object (array or object literal).
* -----
* 2a) If an object literal, map through each key.
* 2a-1) If key is a Scalar type...
* 2a-1-1) And key is "__typename", delete and return result.
* 2a-1-2) if key is something else, simply assign the Scalar value to a new object and return.
* 2a-2) If key is an array...
* 2a-2-1) Recursively call "cleanOffTypename" with array content.
* 2a-2-2) Once complete, assign the parent object value the array result and return.
* 2a-3) If key is an object literal...
* 2a-3-1) Recursively call "cleanOffTypename" with the nested Object literal content.
* 2a-3-2) Once compelte, assign the parent object value the cleaned object and return.
* -----
* 2b)If an Array, map through each array value.
* 2b-1) Recursively call "cleanOffTypename" with array content.
* 2b-2) Once compelte, return the result.
*
* @param {object || array || scalar} input - Any JS primitive.
*
* @return {object || scalar} - The cleaned object result in case work has been done.  Scalar value if no work has been done.
*/

const cleanOffTypename = (input) => {
  if (typeof input === 'object') {
    let result;

    if (!Array.isArray(input)) {
      let cleanedObject = {};

      Object.keys(input).forEach((key) => {
        if (typeof input[key] !== 'object') {
          if (key === '__typename') {
            delete input[key];
            cleanedObject = { ...input };
          } else {
            cleanedObject[key] = input[key];
          }
        } else if (Array.isArray(input[key])) {
          const nestedCleanedArray = input[key].map(content => cleanOffTypename(content));
          cleanedObject[key] = [...nestedCleanedArray];
        } else {
          const nestedCleanedObject = cleanOffTypename(input[key]);
          cleanedObject[key] = { ...nestedCleanedObject };
        }
      });
      result = { ...cleanedObject };
    } else if (Array.isArray(input)) {
      input.forEach((arrayContent) => {
        result = cleanOffTypename(arrayContent);
      });
    }
    return result;
  }
  return input;
};
export default cleanOffTypename;
