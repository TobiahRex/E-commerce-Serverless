import Promise from 'bluebird';
import {
  GraphQLInt as IntType,
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
  GraphQLList as ListType,
  GraphQLString as StringType,
} from 'graphql';

// import ProductTypes from './types/productTypes';
import UserTypes from './types/userTypes';

import { Product as ProductModel } from '../mongo/product';
import { User as UserModel } from '../mongo/user';

const query = new ObjectType({
  name: 'RootQueryType',
  description: 'The primary query object type.',
  fields: {
    popularProducts: {
      type: new ObjectType({
        name: 'Product',
        description: 'A product we sell.',
        fields: {
          title: {
            type: StringType,
            description: 'Name of the product.',
          },
          flavor: {
            type: StringType,
            description: 'The flavor for the product (if applicable).',
          },
          price: {
            type: StringType,
            description: 'The price of the product.',
          },
          routeTag: {
            type: StringType,
            description: 'The name of the unique route for the product',
          },
          images: {
            type: new ListType(
              new ObjectType({
                name: 'ProductImageType',
                fields: () => ({
                  purpose: { type: StringType },
                  url: { type: StringType },
                }),
              }),
            ),
            description: 'Product images.',
          },
        },
      }),
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

export default new Schema({
  query,
  mutation,
});
