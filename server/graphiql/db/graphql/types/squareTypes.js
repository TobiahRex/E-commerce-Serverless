import {
  GraphQLInt as IntType,
  GraphQLList as ListType,
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

const queryTypes = {
  squareLocations: new ObjectType({
    name: 'SquareLocations',
    fields: () => ({
      id: {
        description: 'The location id.',
        type: StringType,
      },
      name: {
        description: 'The name of this location.',
        type: StringType,
      },
      address: new ObjectType({
        name: 'SqaureLocationAddressInfo',
        fields: () => ({
          address_line_1: { type: StringType },
          locality: { type: StringType },
          administrative_district_level_1: { type: StringType },
          postal_code: { type: IntType },
          country: {
            description: 'Two character country code.',
            type: StringType,
          },
        }),
      }),
      timezone: {
        description: '"Country"/"City" format.',
        type: StringType,
      },
      capabilities: new ListType(StringType),
    }),
  }),
};

const queries = {
  FetchLocations: {
    type: new ListType()
  }
}
