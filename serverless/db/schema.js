import {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
// import { GraphQLError } from 'graphql/error';
import {
  Juices
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
      resolve: getPopularJuices,
    }
  }
})

const Shchema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
