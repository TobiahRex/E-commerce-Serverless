import Promise from 'bluebird';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import {
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from 'graphql';
// import UserTypes from '../../serverless/db/graphql/types/userTypes';
import { Product as ProductModel } from '../../serverless/db/mongo/product';
import { User as UserModel } from '../../serverless/db/mongo/user';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The primary query object type.',
  fields: {
    popularProducts: {
      type: new GraphQLObjectType({
        name: 'Product',
        description: 'A product we sell.',
        fields: {
          title: {
            type: GraphQLString,
            description: 'Name of the product.',
          },
          flavor: {
            type: GraphQLString,
            description: 'The flavor for the product (if applicable).',
          },
          price: {
            type: GraphQLString,
            description: 'The price of the product.',
          },
          routeTag: {
            type: GraphQLString,
            description: 'The name of the unique route for the product',
          },
          images: {
            type: new GraphQLList(
              new GraphQLObjectType({
                name: 'ProductImageType',
                fields: () => ({
                  purpose: { type: GraphQLString },
                  url: { type: GraphQLString },
                }),
              }),
            ),
            description: 'Product images.',
          },
        },
      }),
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

const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createUser: {
      type: new GraphQLObjectType({
        name: 'RootUserType',
        fields: () => ({
          name: {
            type: new GraphQLObjectType({
              name: 'UserNameObject',
              description: 'Users name object.',
              fields: {
                first: { type: GraphQLString },
                last: { type: GraphQLString },
                display: { type: GraphQLString },
              },
            }),
          },
          authentication: {
            type: new GraphQLObjectType({
              name: 'UserAuthenticationObject',
              description: 'Authentication information for user.',
              fields: () => ({
                lastLogin: { type: GraphQLString },
                signedUp: { type: GraphQLString },
                registered: { type: GraphQLString },
                password: { type: GraphQLString },
                avatar: { type: GraphQLString },
              }),
            }),
          },
          contactInfo: {
            type: new GraphQLObjectType({
              name: 'UserContanctInfoObject',
              description: 'Geolocation information for user.',
              fields: () => ({
                email: { type: GraphQLString },
                phone: { type: GraphQLString },
                location: {
                  type: new GraphQLObjectType({
                    name: 'UserGeolocationObject',
                    fields: {
                      ipAddress: { type: GraphQLString },
                      lat: { type: GraphQLString },
                      long: { type: GraphQLString },
                      country: { type: GraphQLString },
                    },
                  }),
                },
              }),
            }),
          },
          permissions: {
            type: new GraphQLObjectType({
              name: 'UserPermissionsObject',
              description: 'Permissions granted for user.',
              fields: () => ({
                role: { type: GraphQLString },
              }),
            }),
          },
          userStory: {
            type: new GraphQLObjectType({
              name: 'UserStoryObject',
              description: 'Bio information for user.',
              fields: () => ({
                age: { type: GraphQLInt },
                birthday: { type: GraphQLString },
                bio: { type: GraphQLString },
              }),
            }),
          },
        }),
      }),
      description: 'Create new user.',
      args: {
        name: {
          description: 'Object: Users name.',
          type: new GraphQLNonNull(
            new GraphQLInputObjectType({
              name: 'UserInputNameObject',
              fields: () => ({
                first: { type: GraphQLString },
                last: { type: GraphQLString },
                display: { type: GraphQLString },
              }),
            }),
          ),
        },
        authentication: {
          description: 'Object: Auth info for user.',
          type: new GraphQLNonNull(
            new GraphQLInputObjectType({
              name: 'UserInputAuthenticationObject',
              fields: () => ({
                lastLogin: { type: GraphQLString },
                signedUp: { type: GraphQLString },
                registered: { type: GraphQLString },
                password: { type: GraphQLString },
                avatar: { type: GraphQLString },
              }),
            }),
          ),
        },
        contactInfo: {
          description: 'Object: Contanct info for user.',
          type: new GraphQLNonNull(
            new GraphQLInputObjectType({
              name: 'UserInputContactInfoObject',
              fields: () => ({
                email: { type: GraphQLString },
                phone: { type: GraphQLString },
                location: {
                  type: new GraphQLNonNull(
                    new GraphQLInputObjectType({
                      name: 'UserInputGeolocationObject',
                      description: 'Object: Geolocation information for user.',
                      fields: () => ({
                        ipAddress: { type: GraphQLString },
                        lat: { type: GraphQLString },
                        long: { type: GraphQLString },
                        country: { type: GraphQLString },
                      }),
                    }),
                  ),
                },
              }),
            }),
          ),
        },
        permissions: {
          description: 'Object: Permissions granted for user.',
          type: new GraphQLNonNull(
            new GraphQLInputObjectType({
              name: 'UserInputPermissionsObject',
              fields: () => ({
                role: { type: GraphQLString },
              }),
            }),
          ),
        },
        userStory: {
          description: 'Object: Bio information for user.',
          type: new GraphQLNonNull(
            new GraphQLInputObjectType({
              name: 'UserInputStoryObject',
              fields: () => ({
                age: { type: GraphQLInt },
                birthday: { type: GraphQLString },
                bio: { type: GraphQLString },
              }),
            }),
          ),
        },
      },
      resolve: (_, args) => Promise.fromCallback(cb => UserModel.createUser(args, cb)),
    },
  },
});

const schema = new GraphQLSchema({
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
