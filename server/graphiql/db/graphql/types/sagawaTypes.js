import {
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
    }
  },
});
