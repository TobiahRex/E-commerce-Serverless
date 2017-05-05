import Promise from 'bluebird';
import {
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
// import { GraphQLError } from 'graphql/error';
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
    popularJuices: {
      type: ProductTypes.popularJuices,
      description: 'The 6 most popular juices.',
      resolve: (_, args) => Promise.fromCallback(cb => ProductModel.getPopularJuices(args, cb)),
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
          type: UserTypes.createUserInput.name,
        },
        authentication: {
          type: UserTypes.createUserInput.authentication,
        },
        contactInfo: {
          type: UserTypes.createUserInput.contactInfo,
        },
        permissions: {
          type: UserTypes.createUserInput.permissions,
        },
        userStory: {
          type: UserTypes.createUserInput.userStory,
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
