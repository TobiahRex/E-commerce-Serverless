import express from 'express';
import graphqlHTTP from 'express-graphql';
import {
  // GraphQLInt,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import ProductTypes from './db/graphql/types/productTypes';
import UserTypes from './db/graphql/types/userTypes';
import ProductModel from './db/mongo/models/product';
import UserModel from './db/mongo/models/user';

require('dotenv').load({ silent: true }); //eslint-disable-line

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The primary query object type.',
  fields: () => ({
    popularProducts: ProductTypes.queries.popularProducts,
  }),
});
const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
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
  },
});
const schema = new GraphQLSchema({
  query,
  mutation,
});

const PORT = process.env.GRAPHIQL_PORT || 3002;
const server = express();
server.use('/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);
server.listen(PORT, () => console.log(`Server listening @ ${PORT}
Graphiql Server @ http://localhost:${PORT}/graphql`));
