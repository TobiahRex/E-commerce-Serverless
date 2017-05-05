import express from 'express';
import graphqlHTTP from 'express-graphql';
import {
  Promise,

  Schema,
  ObjectType,
  IntType,

  UserTypes,
  ProductTypes,
  UserModel,
  ProductModel,
} from '../../serverless/db/exports';

console.log('ProductTypes:\ >>> ', ProductTypes);

const query = new ObjectType({
  name: 'RootQueryType',
  description: 'The primary query object type.',
  fields: {
    popularProducts: {
      type: ProductTypes.rootType,
      args: {
        qty: {
          type: IntType,
          description: 'The quantity of popular products to return.',
        },
      },
      resolve: (_, args) => Promise.fromCallback(cb => ProductModel.getPopularProducts(args, cb)),
    },
  },
});

const mutation = new ObjectType({
  name: 'RootMutationType',
  fields: {
    createUser: {
      type: UserTypes.rootType,
      description: 'Create new user.',
      args: UserTypes.mutation.createUser.args,
      resolve: (_, args) => Promise.fromCallback(cb => UserModel.createUser(args, cb)),
    },
  },
});

const schema = new Schema({
  query,
  mutation,
});

const PORT = process.env.GRAPHIQL_PORT || 3002;

const server = express();
server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

server.listen(PORT, () => console.log(`Server listening @ ${PORT}`));
