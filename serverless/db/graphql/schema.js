import {
  GraphQLList,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from 'graphql';
// import { GraphQLError } from 'graphql/error';
import {
  User,
  Product,
  Transaction,
} from './mongo';

const popularJuicesType = new GraphQLObjectType({
  name: 'PopularJuicesType',
  description: 'The 6 most popular juices',
});

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root query.',
  fields: {
    popularJuices: {
      type: new GraphQLList(popularJuicesType),
      description: 'The 6 most popular juices.',
      resolve: Product.getPopularJuices,
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  desciption: 'The root mutation type.',
  fields: {
    createUser: {
      type: User,
      description: 'Create new user.',
      args: {
        name: new GraphQLInputObjectType({
          name: 'User name object.',
          fields: {
            first: {
              description: 'The first name of the user',
              type: GraphQLNonNull(GraphQLString),
            },
            last: {
              description: 'The last name of the user.',
              type: GraphQLNonNull(GraphQLString),
            },
          },
        }),
        socialBlob: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_, args) => User.createUser(args),
    },
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
