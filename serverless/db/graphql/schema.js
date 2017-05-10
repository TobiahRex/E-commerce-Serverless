import Promise from 'bluebird';
import {
  GraphQLInt,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import ProductTypes from './types/productTypes';
import UserTypes from './types/userTypes';
import ProductModel from '../mongo/models/product';
import UserModel from '../mongo/models/user';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The primary query object type.',
  fields: {
    popularProducts: {
      type: ProductTypes.rootType,
      args: {
        qty: {
          type: GraphQLInt,
          description: 'The quantity of popular products to return.',
        },
      },
      resolve: (_, args) => ProductModel.getPopularProducts(args),
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createUser: {
      type: UserTypes.rootType,
      description: 'Create new user.',
      args: UserTypes.mutation.createUser.args,
      resolve: (_, args) => Promise.fromCallback(cb => UserModel.createUser(args, cb)),
    },
  },
});

export default new GraphQLSchema({
  query,
  mutation,
});
