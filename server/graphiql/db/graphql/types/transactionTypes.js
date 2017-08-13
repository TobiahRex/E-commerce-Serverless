import {
  GraphQLID as MongoId,
  GraphQLList as ListType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import Transaction from '../../mongo/models/transaction';

const rootType = new ObjectType({
  name: 'Transaction',
  description: 'An application transaction.',
  fields: {
    _id: {
      description: 'The ID of the Product.',
      type: new NonNull(MongoId),
    },
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
    date: {
      description: 'The date this transaction occured.',
      type: StringType,
    },
    user: {
      description: 'The _id of the user who executed this transaction.',
      type: MongoId,
    },
    products: new ListType(
      new ObjectType({
        name: 'TransactionProductList',
        fields: () => ({
          id: {
            description: 'The _id of the Product',
            type: MongoId,
          },
          qty: {
            description: 'The quantity purchased.',
            type: IntType,
          },
        }),
      }),
    ),
    discount: new ObjectType({
      name: 'TransactionDiscounts',
      fields: () => ({
        qty: {
          description: 'Boolean describing whether or not the user has received the 25% OFF "Quantity Discount" for this Transaction.',
          type: BoolType,
        },
        qtyAmount: {
          description: 'The dollar amount value if receiving this discount.',
          type: StringType,
        },
        register: {
          description: 'Boolean describing whether or not the user has received the 10% OFF "Register Discount" for this Transaction.',
          type: BoolType,
        },
        registerAmount: {
          description: 'The dollar amount value if receiving this discount.',
          type: StringType,
        },
      }),
    }),
    subTotal: {
      description: 'The subTotal amount for this transaction.',
      type: StringType,
    },
    tax: {
      description: 'The taxes amount for this transaction.',
      type: StringType,
    },
    grandTotal: {
      description: 'The grand total amount for this transaction.',
      type: StringType,
    },
  },
  marketHero: {
    description: 'The Mongo _id for the Market Hero lead.',
    type: MongoId,
  },
  invoiceEmail: {
    description: 'The Mongo _id for the invoice Email that was sent.',
    type: MongoId,
  },
});

const queryTypes = {
  squareLocations: new ObjectType({
    name: 'SquareLocations',
    fields: () => ({
      error: {
        description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
        type: new ObjectType({
          name: 'SquareLocationError',
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
      address: {
        type: new ObjectType({
          name: 'SqaureLocationAddressInfo',
          fields: () => ({
            address_line_1: { type: StringType },
            locality: { type: StringType },
            administrative_district_level_1: { type: StringType },
            postal_code: { type: StringType },
            country: {
              description: 'Two character country code.',
              type: StringType,
            },
          }),
        }),
      },
      timezone: {
        description: '"Country"/"City" format.',
        type: StringType,
      },
      capabilities: {
        description: 'Lists the assigned permissions for the location.',
        type: new ListType(StringType),
      },
    }),
  }),
};

const queries = {
  FetchSquareLocations: {
    type: queryTypes.squareLocations,
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
    resolve: () => Transaction.fetchSquareLocation(),
  },
};

export default {
  rootType,
  queries,
  // mutations,
};
