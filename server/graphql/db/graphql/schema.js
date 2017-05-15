import {
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
  fields: () => ({
    findProductById: ProductTypes.queries.findProductById,
    popularProducts: ProductTypes.queries.popularProducts,
  }),
});

const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    createUser: {
      type: UserTypes.rootType,
      description: 'Create new user.',
      args: UserTypes.mutations.createUser.args,
      resolve: (_, args) => UserModel.createUser(args),
    },
    createProduct: {
      type: ProductTypes.rootType,
      description: 'Create new Product',
      args: ProductTypes.mutations.createProduct.args,
      resolve: (_, args) => ProductModel.createProduct(args),
    },
  }),
});

export default new GraphQLSchema({
  query,
  mutation,
});
