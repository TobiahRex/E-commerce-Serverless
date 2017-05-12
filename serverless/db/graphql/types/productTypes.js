import {
  GraphQLInt as IntType,
  GraphQLList as ListType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const ProductTypes = {
  rootType: new ObjectType({
    name: 'Product',
    description: 'A store product.',
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
  mutation: {
    createProduct: {
      args: {
        juice: {
          description: 'Object: All the important details for the product.',
          type: new NonNull(
            new InputObject({
              name: 'NewProductObject',
              fields: () => ({
                mainTitle: { type: StringType },
                title: { type: StringType },
                flavor: { type: StringType }
              }),
            }),
          ),
        },
        authentication: {
          description: 'Object: Auth info for user.',
          type: new NonNull(
            new InputObject({
              name: 'UserInputAuthenticationObject',
              fields: () => ({
                lastLogin: { type: StringType },
                signedUp: { type: StringType },
                registered: { type: StringType },
                password: { type: StringType },
                avatar: { type: StringType },
              }),
            }),
          ),
        },
        contactInfo: {
          description: 'Object: Contanct info for user.',
          type: new NonNull(
            new InputObject({
              name: 'UserInputContactInfoObject',
              fields: () => ({
                email: { type: StringType },
                phone: { type: StringType },
                location: {
                  type: new NonNull(
                    new InputObject({
                      name: 'UserInputGeolocationObject',
                      description: 'Object: Geolocation information for user.',
                      fields: () => ({
                        ipAddress: { type: StringType },
                        lat: { type: StringType },
                        long: { type: StringType },
                        country: { type: StringType },
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
          type: new NonNull(
            new InputObject({
              name: 'UserInputPermissionsObject',
              fields: () => ({
                role: { type: StringType },
              }),
            }),
          ),
        },
        userStory: {
          description: 'Object: Bio information for user.',
          type: new NonNull(
            new InputObject({
              name: 'UserInputStoryObject',
              fields: () => ({
                age: { type: IntType },
                birthday: { type: StringType },
                bio: { type: StringType },
              }),
            }),
          ),
        },
      },
    },
  },
};
export default ProductTypes;
