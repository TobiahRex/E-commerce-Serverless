import {
  GraphQLSchema,
} from 'graphql';
// import { GraphQLError } from 'graphql/error';

const Shchema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})

export default Schema;
