/**
* Function: "cleanOffTypeName"
* - Removes the property "__typename" from objects received from Apollo graphql queries.
*/

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
1) Ensure type is an object (array or object literal).
2) If an object literal, map through each key.
3) If key is a Scalar type...
3a) And key is "__typename", delete and return result.
3b) if key is
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
console.log(JSON.stringify(cleanTypeName(example), null, 2));


const example2 = [0, 0, [1, 1, 1, [2, 2, [3, 3, 3]]]];

const rescursiveArrayIncrementor = (array, layerNumber) => {
  let layer = layerNumber || 1;

  if (!Array.isArray(array)) {
    const result = array.map((content) => {
      if (!Array.isArray(content)) {
        content += layer;
        return content;
      }
      layer += 1;
      return rescursiveArrayIncrementor(content, layer);
    });
    return result;
  }
  throw Error(`The first argument should be an array. You passed a(n) "${typeof array}"`);
};
// console.log(JSON.stringify(rescursiveArrayIncrementor(example2), null, 2));
