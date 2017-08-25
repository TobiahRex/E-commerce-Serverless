import {
  GraphQLID as MongoId,
  GraphQLInt as IntType,
  GraphQLList as ListType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

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
        name: 'SagawaError',
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
    postalInfo: {
      description: 'The postal code validation response from Sagawa.',
      type: new ObjectType({
        name: 'SagawaPostalInfo',
        fields: () => ({
          verified: { type: BoolType },
          postalCode: { type: StringType },
          jpAddress: { type: StringType },
        }),
      }),
    },
    shippingAddress: {
      description: 'The shipping information in Sagawa required format.',
      type: new ObjectType({
        name: 'SagawaShippingInformation',
        fields: () => ({
          awbId: { type: StringType },
          referenceId: { type: StringType },
          boxid: { type: StringType },
          shipdate: { type: StringType },
          customerName: { type: StringType },
          postal: { type: StringType },
          jpaddress1: { type: StringType },
          jpaddress2: { type: StringType },
          phoneNumber: { type: StringType },
          kbn: { type: StringType },
          wgt: { type: IntType },
          grandTotal: { type: IntType },
          deliveryDate: { type: StringType },
          deliveryTime: { type: IntType },
          souryo: { type: IntType },
          tesuryo: { type: IntType },
          ttlAmount: { type: IntType },
          codFlg: { type: IntType },
        }),
      }),
    },
    items: {
      description: 'The itemization information in Sagawa required format.',
      type: new ListType(
        new ObjectType({
          name: 'SagawaItemObject',
          fields: () => ({
            itemcd: { type: IntType },
            itemname: { type: StringType },
            usage: { type: IntType },
            origin: { type: StringType },
            piece: { type: IntType },
            unitprice: { type: IntType },
          }),
        }),
      ),
    },
  },
});

const mutationTypes = {
  ValidatePostal: new ObjectType({
    name: 'SagawaValidatePostalResponse',
    fields: () => ({
      error: {
        description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
        type: new ObjectType({
          name: 'SagawaValidatePostalError',
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
      postalInfo: {
        description: 'The postal code validation response from Sagawa.',
        type: new ObjectType({
          name: 'SagawaValidatePostalInfo',
          fields: () => ({
            verified: { type: BoolType },
            postalCode: { type: StringType },
            jpAddress: { type: StringType },
          }),
        }),
      },
    }),
  }),
};

const queryTypes = {
  FetchTrackingInfo: new ObjectType({
    name: 'SagawaFetchTrackingInfo',
    fields: () => ({
      error: {
        description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
        type: new NonNull(
          new ObjectType({
            name: 'SagawaFetchTrackingInfoError',
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
        ),
      },
      shipDate: {
        description: 'The day the order was first shipped.',
        type: StringType,
      },
      orderStatus: {
        description: 'The current status of the order.',
        type: StringType,
      },
      trackingNumber: {
        description: 'The tracking number.',
        type: StringType,
      },
      userName: {
        description: 'The name of the user who purchased the goods.',
        type: StringType,
      },
      orderId: {
        description: 'The Mongo ID of the transaction.',
        type: StringType,
      },
      totalPaid: {
        description: 'The total amount paid for the transaction.',
        type: StringType,
      },
      trackingInfo: {
        description: 'An object of tracking information.',
        type: new ListType(
          new ObjectType({
            name: 'FetchTrackingInfoEnum',
            fields: () => ({
              location: {
                description: 'The location of the currenty activity.',
                type: StringType,
              },
              date: {
                description: 'The date of the activity.',
                type: StringType,
              },
              activity: {
                description: 'The description of the activity.',
                type: StringType,
              },
            }),
          }),
        ),
      },
    }),
  }),
};

const queries = {
  FetchSagawa: {
    type: rootType,
    args: {
      id: {
        description: 'The Mongo ID of the Sagawa Document to fetch.',
        type: new NonNull(MongoId),
      },
    },
    resolve: (_, { id }, { Sagawa }) => Sagawa.findById(id),
  },
  FetchTrackingInfo: {
    type: queryTypes.FetchTrackingInfo,
    args: {
      token: {
        description: 'The token needed for retrieving tracking information.',
        type: new NonNull(StringType),
      },
    },
    resolve: (_, { token }, { Sagawa }) => Sagawa.FetchTrackingInfo(token),
  },
};

const mutations = {
  ValidatePostal: {
    type: mutationTypes.ValidatePostal,
    args: {
      postalCode: {
        description: 'The postal code to validate.',
        type: new NonNull(StringType),
      },
    },
    resolve: (_, args, { Sagawa }) => Sagawa.validatePostal(args),
  },
};

export default {
  rootType,
  mutations,
  queries,
};
