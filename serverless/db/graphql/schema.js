import {
  Promise,

  Schema,
  ObjectType,
  IntType,

  UserTypes,
  ProductTypes,
  UserModel,
  ProductModel,
} from '../exports';

const Query = new ObjectType({
  name: 'RootQueryType',
  description: 'The root query.',
  fields: {
    popularProducts: {
      type: ProductTypes.rootType,
      description: 'Returns the most popular products.',
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

const Mutation = new ObjectType({
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
export default new Schema({
  query: Query,
  mutation: Mutation,
});
