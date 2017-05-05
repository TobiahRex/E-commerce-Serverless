import Promise from 'bluebird';
import {
  GraphQLInt,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import {
  UserModel,
  ProductModel,
  UserTypes,
  ProductTypes,
} from './exports';

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root query.',
  fields: {
    popularProducts: {
      type: ProductTypes.rootType,
      description: 'Returns the most popular products.',
      args: {
        qty: {
          type: GraphQLInt,
          description: 'The quantity of popular products to return.',
        },
      },
      resolve: (_, args) => Promise.fromCallback(cb => ProductModel.getPopularProducts(args, cb)),
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  desciption: 'The root mutation type.',
  fields: {
    createUser: {
      type: UserTypes.rootType,
      description: 'Create new user.',
      args: UserTypes.mutation.createUser.args,
      resolve: (_, args) => Promise.fromCallback(cb => UserModel.createUser(args, cb)),
    },
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
