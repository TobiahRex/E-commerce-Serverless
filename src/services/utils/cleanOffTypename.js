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
    if (!Array.isArray(input)) {
      Object.keys(input).forEach((key) => {
        if (typeof input[key] !== 'object') {
          if (key === '__typename') delete input[key];
        }
      });
    } else {

    }
  }
  return input;
};
