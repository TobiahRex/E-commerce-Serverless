const example = [
  {
    __typename: 'layer1',
    layer1Name: 'toby',
    entry1: {
      __typename: 'layer2',
      layer2Name: 'tobiah',
      entry2: [
        {
          __typename: 'layer3',
          layer3Name: 'tobiah rex',
        },
        {
          __typename: 'layer3',
          layer3Name: 'bickley',
        },
      ],
    },
  },
  {
    __typename: 'layer1',
    layer1Name: 'toby',
    entry1: {
      __typename: 'layer2',
      layer2Name: 'tobiah',
      entry2: [
        {
          __typename: 'layer3',
          layer3Name: 'tobiah rex',
        },
        {
          __typename: 'layer3',
          layer3Name: 'bickley',
        },
      ],
    },
  },
];

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
      const cleanedObject = {};

      Object.keys(input).forEach((key) => {
        if (input[key] === null) {
          result = '';
        } else if (typeof input[key] !== 'object') {
          if (key === '__typename') {
            const objectCopy = { ...input };
            delete objectCopy[key];
            result = { ...objectCopy };
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

// TESTS
// console.log(JSON.stringify(cleanOffTypename(example), null, 2));
//
// var obj = {
//   _id: '59946a4fc55ca9705ce03bbd',
//   error: { hard: false, soft: false, message: '', __typename: 'TransactionError' },
//   date: 'Thu Aug 17 2017 00:52:47 GMT+0900 (JST)',
//   comments: '',
//   termsAgreement: true,
//   user: '5994620bbc20b46f936e8cbf',
//   products: [{ _id: '59760a10a336bb31a4583256', qty: 4, __typename: 'TransactionProductList' }],
//   sagawa: '59946a3cc55ca9705ce03bbb',
//   marketHero: null,
//   invoiceEmail: null,
//   taxes: {
//     cityRate: '0.036',
//     stateRate: '0.065',
//     totalRate: '0.101',
//     __typename: 'TransactionTaxesInfo',
//   },
//   total: {
//     subTotal: '120',
//     taxes: '12.12',
//     grandTotal: '90.12',
//     discount: {
//       qty: true,
//       qtyAmount: '30',
//       register: true,
//       registerAmount: '12',
//       __typename: 'TransactionDiscounts',
//     },
//     __typename: 'TransactionTotalsInfo',
//   },
//   square: {
//     locationId: '',
//     transactionId: '',
//     billingAddress: {
//       billingCountry: 'Japan',
//       billingPrefecture: 'Aichi',
//       billingCity: 'yokosuka',
//       __typename: 'TransactionSquareBillingAddress',
//     },
//     cardInfo: {
//       last4: 5858,
//       nameOnCard: 'TobiahRex',
//       cardNonce: 'CBASEOAAXuRm4CiHG2IFw1OF9LsgAQ',
//       __typename: 'TransactionSquareCCInfo',
//     },
//     charge: { amount: '90.12', currency: 'USD', __typename: 'TransactionSquareChargeInfo' },
//     __typename: 'TransactionSqaureInformation',
//   },
//   __typename: 'Transaction',
// };
// console.log(JSON.stringify(cleanOffTypename(obj), null, 2));
