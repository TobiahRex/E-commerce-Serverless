import Promise from 'bluebird';
import {
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import {
  UserModel,
  ProductModel,
  UserTypes,
  ProductTypes,
} from './imports';

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root query.',
  fields: {
    popularProducts: {
      type: ProductTypes.popularProducts,
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
      args: {
        name: {
          type: UserTypes.createUser.name,
        },
        authentication: {
          type: UserTypes.createUser.authentication,
        },
        contactInfo: {
          type: UserTypes.createUser.contactInfo,
        },
        permissions: {
          type: UserTypes.createUser.permissions,
        },
        userStory: {
          type: UserTypes.createUser.userStory,
        },
        socialBlob: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_, args) => Promise.fromCallback(cb => UserModel.createUser(args, cb)),
    },
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
