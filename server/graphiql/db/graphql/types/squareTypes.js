import {
  GraphQLID as MongoId,
  GraphQLInt as IntType,
  GraphQLList as ListType,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import Square from '../../mongo/models/square';

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
      error: {
        description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
        type: new ObjectType({
          name: 'ProductError',
          fields: () => ({
            hard: {
              description: 'Boolean flag for a hard failure. Operations should not continue until action by user has been taken.',
              type: BoolType,
            },
            soft: {
              description: 'Boolean flag for a soft failure.  Operations should be allowed to continue.',
              type: BoolType,
            },
            message: {
              description: 'Amplifying information about error.  Should be written for user readibility.',
              type: StringType,
            },
          }),
        }),
      },
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
    type: new ListType(queryTypes.squareLocations),
    args: {
      // userId: {
      //   description: 'The user\'s unique _id.',
      //   type: MongoId,
      // },
      // accessToken: {
      //   description: 'The user\'s Auth0 access token.',
      //   type: StringType,
      // },
    },
    resolve: (_, args) => Square.fetchLocation(),
  },
};
