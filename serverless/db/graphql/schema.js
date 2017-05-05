import Promise from 'bluebird';
import {
  // GraphQLList,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
// import { GraphQLError } from 'graphql/error';
import {
  UserModel,
  UserTypes,
  // ProductsTypes,
} from './imports';

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root query.',
  fields: {
    // popularJuices: {
    //   type: new GraphQLList(popularJuicesType),
    //   description: 'The 6 most popular juices.',
    //   resolve: Product.getPopularJuices,
    // },
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
        name: UserTypes.createUserInput.name,
        authentication: UserTypes.createUserInput.authentication,
        contactInfo: UserTypes.createUserInput.contactInfo,
        permissions: UserTypes.createUserInput.permissions,
        userStory: UserTypes.createUserInput.userStory,
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
