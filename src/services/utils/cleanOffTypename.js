/**
* Function: "cleanOffTypeName"
* - Removes the property "__typename" from objects received from Apollo graphql queries.
*/

const example = [{
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
}];

const cleanOffTypename = (cleanMe) => {


  if (Array.isArray(cleanMe)) {
    cleanMe.map((object) => {

    })
  } else if (!Array.isArray(cleanMe) && (typeof cleanMe === 'object')) {
    const newObject = {};
    Object.keys(cleanMe)
    .forEach((key) => {
      if (key !== '__typename') {
        newObject[key] = cleanMe[key];
      }
    });
  }
};
