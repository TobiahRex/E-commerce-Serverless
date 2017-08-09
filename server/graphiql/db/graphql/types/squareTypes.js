import {
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

const rootType = new ObjectType({
  name: 'TransactionSquareInfo',
  fields: () => ({
    billingInfo: {
      description: 'Billing information used to purchase products.',
      type: new ObjectType({
        name: 'TransactionSquareBillingInfo',
        fields: () => ({
          nameOnCard: { type: StringType },
          last4: { type: StringType },
          amount: { type: StringType },
          email: { type: StringType },
        }),
      }),
    },
    locationId: {
      description: 'The Square location Id used for this transaction.',
      type: StringType,
    },
    transactionId: {
      description: 'The Square transaction Id generated for this transaction.',
      type: StringType,
    },
    cardNonce: {
      description: 'The Square generated, unique code that maps all sensitive CC info to this transaction.',
    },
  }),
});
