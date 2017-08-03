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

// const cleanOffTypename = (cleanMe) => {
//
//
//   if (Array.isArray(cleanMe)) {
//     cleanMe.map((object) => {
//
//     })
//   } else if (!Array.isArray(cleanMe) && (typeof cleanMe === 'object')) {
//     const newObject = {};
//     Object.keys(cleanMe)
//     .forEach((key) => {
//       if (key !== '__typename') {
//         newObject[key] = cleanMe[key];
//       }
//     });
//   }
// };

// 1) Check if input is an array.  If so, recursively check again.
// 2) Once an object is found, then do some work, and return the result.

const recursiveArrayCheck = (input) => {
  if (typeof input === 'object') {
    let result;

    if (!Array.isArray(input)) {
      const cleanedObject = {};

      Object.keys(input).forEach((key) => {
        if (typeof input[key] !== 'object') {
          if (key === '__typename') delete input[key];
          cleanedObject[key] = input[key];
        }
        cleanedObject[key] = { ...input[key] };
      });
      result = recursiveArrayCheck(cleanedObject);
    } else {
      input.forEach((arrayContent) => {
        result = recursiveArrayCheck(arrayContent);
      });
    }
    return result;
  }
  return input;
};
console.log(JSON.stringify(recursiveArrayCheck(example), null, 2));


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
