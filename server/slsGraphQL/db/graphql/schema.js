import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import ProductTypes from './types/productTypes';
import UserTypes from './types/userTypes';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The primary query object.',
  fields: () => ({
    findProductById: ProductTypes.queries.findProductById,
    popularProducts: ProductTypes.queries.popularProducts,
  }),
});

const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'The primary mutation object.',
  fields: () => ({
    createUser: UserTypes.mutations.createUser,
    createProduct: ProductTypes.mutations.createProduct,
    findProductAndUpdate: ProductTypes.mutations.findProductAndUpdate,
  }),
});

export default new GraphQLSchema({
  query,
  mutation,
});
