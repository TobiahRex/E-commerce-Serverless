import {
  GraphQLID as MongoId,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import Sagawa from '../../mongo/models/sagawa';

const rootType = new ObjectType({
  name: 'Sagawa',
  description: 'The shipping details for a User\'s new transaction.',
  fields: {
    _id: {
      description: 'The ID of the Shipping Deatils document.',
      type: MongoId,
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
    userId: {
      description: 'A reference ID to the User Document who owns this information.',
      type: MongoId,
    },
    transactionId: {
      description: 'A reference ID to the Transaction Document that is mapped to this information.',
      type: MongoId,
    },
    status: {
      description: 'A status identifying if the order has been uploaded to Sagawa.',
      type: StringType,
    },
    postalInfo: new ObjectType({
      name: 'SagawaPostalInfo',
      fields: () => ({
        verified: { type: BoolType },
        postalCode: { type: StringType },
        jpAddress: { type: StringType },
      }),
    }),
    shippingAddress: {
      awbId: { type: StringType },
      referenceId: { type: StringType },
      boxid: { type: StringType },
      shipdate: { type: StringType },
      customerName: { type: StringType },
      postal: { type: IntType },
      jpaddress1: { type: StringType },
      jpaddress2: { type: StringType },
      phoneNumber: { type: IntType },
      kbn: { type: StringType },
      wgt: { type: IntType },
      grandTotal: { type: IntType },
      deliveryDate: { type: StringType },
      deliveryTime: { type: IntType },
      souryo: { type: IntType },
      tesuryo: { type: IntType },
      ttlAmount: { type: IntType },
      codFlg: { type: IntType },
    },
    item: {
      itemcd: { type: IntType },
      itemname: { type: StringType },
      usage: { type: IntType },
      origin: { type: StringType },
      piece: { type: IntType },
      unitprice: { type: IntType },
    },
  },
});

const queries = {
  ValidatePostal: {
    type: rootType,
    args: {
      userId: {
        description: 'The user\'s unique _id.',
        type: new NonNull(MongoId),
      },
      postalCode: {
        description: 'The postal code to validate.',
        type: new NonNull(StringType),
      },
    },
    resolve: (_, args) => Sagawa.validatePostal(args),
  },
};

export default {
  rootType,
  queries,
};
