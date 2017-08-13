import {
  GraphQLID as MongoId,
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BoolType,
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
  },
});
