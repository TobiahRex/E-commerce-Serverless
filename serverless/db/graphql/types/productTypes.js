import {
  GraphQLInt as IntType,
  GraphQLList as ListType,
  GraphQLEnumType as EnumType,
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
                mainTitle: { type: new NonNull(StringType) },
                title: { type: new NonNull(StringType) },
                flavor: { type: new NonNull(StringType) },
                price: { type: new NonNull(StringType), description: 'Non-float String denoting the price of the product before tax.' },
                sku: { type: new NonNull(StringType) },
                sizes: { type: new NonNull(
                  new EnumType({
                    name: 'NewProductSize',
                    /* eslint-disable quote-props */
                    values: {
                      '30': {
                        value: '30',
                        description: '30 milliter bottle.',
                      },
                      '60': {
                        value: '60',
                        description: '60 milliliter bottle.',
                      },
                      '120': {
                        value: '120',
                        description: '120 milliliter bottle',
                      },
                    },
                    /* eslint-enable quote-props */
                  }),
                ) },
                nicotine_strengths: {
                  name: 'NewProductNicotineStrengths',
                  description: 'The nicotine strength for the Product.',
                  type: new NonNull(
                    new EnumType({
                      name: 'NewProductNicotineStrengthsEnum',
                      values: {
                        2: {
                          value: 2,
                          description: '2mg of Nicotine.',
                        },
                        4: {
                          value: 4,
                          description: '4mg of Nicotine.',
                        },
                        6: {
                          value: 6,
                          description: '6mg of Nicotine',
                        },
                        8: {
                          value: 8,
                          description: '8mg of Nicotine.',
                        },
                        10: {
                          value: 10,
                          description: '8mg of Nicotine.',
                        },
                        12: {
                          value: 12,
                          description: '8mg of Nicotine.',
                        },
                        14: {
                          value: 14,
                          description: '8mg of Nicotine.',
                        },
                        16: {
                          value: 16,
                          description: '8mg of Nicotine.',
                        },
                        18: {
                          value: 18,
                          description: '8mg of Nicotine.',
                        },
                      },
                    }),
                  ),
                },
                images: {
                  name: 'NewProductImages',
                  description: 'Images array for the new Product.',
                  type: new NonNull(
                    new ListType(
                      new InputObject({
                        name: 'NewProductImageObject',
                        description: 'Product image information',
                        fields: {
                          purpose: { type: new NonNull(StringType) },
                          url: { type: new NonNull(StringType) },
                        },
                      }),
                    ),
                  ),
                },
                routeTag: {
                  name: 'NewProductRouteTag',
                  description: 'The name of the route for the product.',
                  type: new NonNull(StringType),
                },
                vendor: {
                  name: 'NewProductVendorInfo',
                  description: 'The name of the vendor that supplies or manufacturers the product.',
                  type: StringType,
                },
                dates: {
                  name: 'NewProductImportantDateInformation',
                  description: 'Important dates regarding the product.',
                  type: new NonNull(
                    new InputObject({
                      name: 'NewProductDateObject',
                      fields: {
                        added_to_store: {
                          description: 'The Date the product was first added to the store.',
                          type: new NonNull(StringType),
                        },
                        removed_from_store: {
                          description: 'The Date the product was removed from the store.',
                          type: StringType,
                        },
                      },
                    }),
                  ),
                },
                quantities: {
                  name: 'NewProductStockQuantities',
                  description: 'Availability stats for this product.',
                  type: new InputObject({
                    name: 'NewProductQuantityInfo',
                    fields: {
                      available: {
                        description: 'The available quanitty for this product.',
                        type: IntType,
                      },
                      in_cart: {
                        description: 'The quantity for products currently in customers\' carts.',
                        type: IntType,
                      },
                    },
                  }),
                },
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
