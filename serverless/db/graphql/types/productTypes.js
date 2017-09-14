import {
  GraphQLID as MongoId,
  GraphQLInt as IntType,
  GraphQLList as ListType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLEnumType as EnumType,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const rootType = new ObjectType({
  name: 'Product',
  description: 'A store product.',
  fields: {
    _id: {
      description: 'The ID of the Product.',
      type: new NonNull(MongoId),
    },
    error: {
      description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
      type: new ObjectType({
        name: 'ProductError',
        fields: () => ({
          hard: {
            description: 'Boolean flag for a hard failure. Operations should not continue until action by user has been taken.',
            type: BoolType,
          },
          soft: {
            description: 'Boolean flag for a soft failure.  Operations should be allowed to continue.',
            type: BoolType,
          },
          message: {
            description: 'Amplifying information about error.  Should be written for user readibility.',
            type: StringType,
          },
        }),
      }),
    },
    product: {
      description: 'Object: All the important details for the product.',
      type: new ObjectType({
        name: 'ProductObject',
        fields: () => ({
          mainTitle: {
            description: 'The title for the Single Product page - e.g. You may not want it to be the name of the product but a "Category" of products.',
            type: new ObjectType({
              name: 'ProductMainTitle',
              fields: () => ({
                en: {
                  description: 'English main title.',
                  type: StringType,
                },
                ja: {
                  description: 'Japanese main title.',
                  type: StringType,
                },
              }),
            }),
          },
          title: {
            description: 'The flavor title of the product',
            type: new ObjectType({
              name: 'ProductTitle',
              fields: () => ({
                en: {
                  description: 'English title.',
                  type: StringType,
                },
                ja: {
                  description: 'Japanese title.',
                  type: StringType,
                },
              }),
            }),
          },
          flavor: {
            description: 'The programmatic flavor name of the product',
            type: StringType,
          },
          price: {
            description: 'The price of the product. - WARNING: Do not add $ signs, Do not add (.) decimals.',
            type: StringType,
          },
          sku: {
            description: 'The unique code for the product.',
            type: StringType,
          },
          upc: {
            description: 'The unique product code for the product.',
            type: StringType,
          },
          size: {
            description: 'The available sizes for the product.',
            type: new EnumType({
              name: 'ProductAvailableSizes',
              /* eslint-disable quote-props */
              values: {
                'small': {
                  value: 30,
                  description: '30 milliter bottle.',
                },
                'medium': {
                  value: 60,
                  description: '60 milliliter bottle.',
                },
                'large': {
                  value: 120,
                  description: '120 milliliter bottle',
                },
              },
            }),
          },
          nicotineStrength: {
            description: 'The nicotine strength for the Product.',
            type: new EnumType({
              name: 'ProductNicotineStrengthsEnum',
              values: {
                zero: {
                  value: 0,
                  description: '0mg of Nicotine.',
                },
                two: {
                  value: 2,
                  description: '2mg of Nicotine.',
                },
                three: {
                  value: 3,
                  description: '3mg of Nicotine.',
                },
                four: {
                  value: 4,
                  description: '4mg of Nicotine.',
                },
                six: {
                  value: 6,
                  description: '6mg of Nicotine',
                },
                eight: {
                  value: 8,
                  description: '8mg of Nicotine.',
                },
                ten: {
                  value: 10,
                  description: '8mg of Nicotine.',
                },
                twelve: {
                  value: 12,
                  description: '8mg of Nicotine.',
                },
                fourteen: {
                  value: 14,
                  description: '8mg of Nicotine.',
                },
                sixteen: {
                  value: 16,
                  description: '8mg of Nicotine.',
                },
                eighteen: {
                  value: 18,
                  description: '8mg of Nicotine.',
                },
              },
            }),
          },
          images: {
            description: 'Images array for the new Product.',
            type: new ListType(
              new ObjectType({
                name: 'ProductImageObject',
                fields: () => ({
                  purpose: { type: StringType },
                  url: { type: StringType },
                }),
              }),
            ),
          },
          slug: {
            description: 'The name of the route for the product.',
            type: StringType,
          },
          vendor: {
            description: 'The product vendor title.',
            type: new ObjectType({
              name: 'ProductVendorTitle',
              fields: () => ({
                en: {
                  description: 'English vendor title.',
                  type: StringType,
                },
                ja: {
                  description: 'Japanese vendor title.',
                  type: StringType,
                },
              }),
            }),
          },
          blurb: {
            description: 'A description of the product.',
            type: new ObjectType({
              name: 'ProductBlurb',
              fields: () => ({
                en: {
                  description: 'English blurb.',
                  type: StringType,
                },
                ja: {
                  description: 'Japanese blurb.',
                  type: StringType,
                },
              }),
            }),
          },
          dates: {
            description: 'Important clerical dates regarding the product.',
            type: new ObjectType({
              name: 'ProductDateObject',
              fields: () => ({
                addedToStore: {
                  description: 'The Date the product was first added to the store.',
                  type: StringType,
                },
                removedFromStore: {
                  description: 'The Date the product was removed from the store.',
                  type: StringType,
                },
              }),
            }),
          },
          quantities: {
            description: 'Availability stats for this product.',
            type: new ObjectType({
              name: 'ProductQuantityInfo',
              fields: () => ({
                available: {
                  description: 'The available quanitty for this product.',
                  type: IntType,
                },
                inCarts: {
                  description: 'The quantity for products currently in customers\' carts.',
                  type: IntType,
                },
                purchased: {
                  description: 'The quantity for products purchased by customers.',
                  type: IntType,
                },
              }),
            }),
          },
        }),
      }),
    },
    statistics: {
      description: 'Statistics on purchases for this item.',
      type: new ObjectType({
        name: 'ProductStatistics',
        fields: () => ({
          addsToCart: {
            description: 'The amount of times someone has added this product to their cart.',
            type: IntType,
          },
          completedCheckouts: {
            description: 'The amount of times this item has been successfully purchased.',
            type: IntType,
          },
          transactions: {
            description: 'A list of transactions for this product.',
            type: new ListType(
              new ObjectType({
                name: 'ProductTransaction',
                fields: () => ({
                  transactionId: {
                    description: 'The Mongo ID for transactions.',
                    type: MongoId,
                  },
                  userId: {
                    description: 'The mongo ID for users.',
                    type: MongoId,
                  },
                }),
              }),
            ),
          },
        }),
      }),
    },
  },
});
const queryTypes = {
  popularProductsType: new ObjectType({
    name: 'PopularProductType',
    description: 'The return fields for querying popular products.',
    fields: () => ({
      _id: {
        description: 'The unique identification for this popular product.  Default value is a unique product category.',
        type: new NonNull(StringType),
      },
      docId: {
        description: 'The Mongo ID for the underlying Product.',
        type: new NonNull(StringType),
      },
      title: {
        description: 'The main Title for this Product.',
        type: new NonNull(StringType),
      },
      slug: {
        description: 'The route tag (slug) for this product.',
        type: new NonNull(StringType),
      },
      images: {
        description: 'The images for Popular Products.',
        type: new NonNull(
          new ListType(
            new ObjectType({
              name: 'PopularProductImages',
              fields: () => ({
                purpose: {
                  description: 'The intended purpose for this image.',
                  type: StringType,
                },
                url: {
                  description: 'The url for this image.',
                  type: StringType,
                },
              }),
            }),
          ),
        ),
      },
      completedCheckouts: {
        description: 'The number of times this product has been successfully purchased.',
        type: IntType,
      },
    }),
  }),
};
const queries = {
  FetchMultipleProducts: {
    type: new ListType(rootType),
    args: {
      ids: {
        description: 'An array of Product Mongo Ids.',
        type: new NonNull(
          new ListType(MongoId),
        ),
      },
    },
    resolve: (_, { ids }, { Product }) => Product.fetchMultiple(ids),
  },
  FindProductsByFlavor: {
    type: new ListType(rootType),
    args: {
      flavor: {
        description: 'The Mongo flavor of the products.',
        type: new NonNull(StringType),
      },
    },
    resolve: (_, { flavor }, { Product }) => Product.findProductsByFlavor(flavor),
  },
  FindProductById: {
    type: rootType,
    args: {
      _id: {
        description: 'The Mongo _id of the product.',
        type: new NonNull(MongoId),
      },
    },
    resolve: (_, { _id }, { Product }) => Product.findProductById(_id),
  },
  PopularProducts: {
    type: new ListType(queryTypes.popularProductsType),
    args: {
      qty: {
        description: 'The quantity of popular products to return.',
        type: new NonNull(IntType),
      },
    },
    resolve: (_, { qty }, { Product }) => Product.getPopularProducts(qty),
  },
};
export const inputTypes = {
  product: {
    fields: uniqueName => ({
      mainTitle: {
        description: 'The main title for the Single Product page - e.g. You may not want it to be the name of the product but a "Category" of products.',
        type: new InputObject({
          name: `${uniqueName}MainTitleInput`,
          fields: () => ({
            en: {
              description: 'English main title.',
              type: new NonNull(StringType),
            },
            ja: {
              description: 'Japanese main title.',
              type: new NonNull(StringType),
            },
          }),
        }),
      },
      title: {
        description: 'The flavor title of the product',
        type: new InputObject({
          name: `${uniqueName}TitleInput`,
          fields: () => ({
            en: {
              description: 'English title.',
              type: new NonNull(StringType),
            },
            ja: {
              description: 'Japanese title.',
              type: new NonNull(StringType),
            },
          }),
        }),
      },
      flavor: {
        description: 'The flavor of the new product.',
        type: new NonNull(StringType),
      },
      price: {
        description: 'The price of the new product. - WARNING: Do not add $ signs, Do not add (.) decimals.',
        type: new NonNull(StringType),
      },
      sku: {
        description: 'The unique code for the new product.',
        type: new NonNull(StringType),
      },
      upc: {
        description: 'The unique product code for the product.',
        type: new NonNull(StringType),
      },
      size: {
        description: 'The available sizes for the product.',
        type: new NonNull(
          new EnumType({
            name: `ProductAvailableSizes${uniqueName}`,
            /* eslint-disable quote-props */
            values: {
              'small': {
                value: 30,
                description: '30 milliter bottle.',
              },
              'medium': {
                value: 60,
                description: '60 milliliter bottle.',
              },
              'large': {
                value: 120,
                description: '120 milliliter bottle',
              },
            },
            /* eslint-enable quote-props */
          }),
        ),
      },
      nicotineStrength: {
        description: 'The nicotine strength for the new product.',
        type: new NonNull(
          new EnumType({
            name: `ProductNicotineStrengthsEnum${uniqueName}`,
            values: {
              zero: {
                value: 0,
                description: '2mg of Nicotine.',
              },
              two: {
                value: 2,
                description: '2mg of Nicotine.',
              },
              three: {
                value: 3,
                description: '2mg of Nicotine.',
              },
              four: {
                value: 4,
                description: '4mg of Nicotine.',
              },
              six: {
                value: 6,
                description: '6mg of Nicotine',
              },
              eight: {
                value: 8,
                description: '8mg of Nicotine.',
              },
              ten: {
                value: 10,
                description: '8mg of Nicotine.',
              },
              twelve: {
                value: 12,
                description: '8mg of Nicotine.',
              },
              fourteen: {
                value: 14,
                description: '8mg of Nicotine.',
              },
              sixteen: {
                value: 16,
                description: '8mg of Nicotine.',
              },
              eighteen: {
                value: 18,
                description: '8mg of Nicotine.',
              },
            },
          }),
        ),
      },
      images: {
        description: 'Images array for the new Product.',
        type: new NonNull(
          new ListType(
            new InputObject({
              name: `ProductImageObject${uniqueName}`,
              fields: () => ({
                purpose: {
                  description: 'What this specific image will be used for - e.g. "Juice Card"',
                  type: new NonNull(StringType),
                },
                url: {
                  description: 'The S3 url for this image.',
                  type: new NonNull(StringType),
                },
              }),
            }),
          ),
        ),
      },
      slug: {
        description: 'The name of the route for the new product.',
        type: new NonNull(StringType),
      },
      vendor: {
        description: 'The name of the manufacturer of the product.',
        type: new InputObject({
          name: `${uniqueName}VendorTitleInput`,
          fields: () => ({
            en: {
              description: 'English vendor title.',
              type: new NonNull(StringType),
            },
            ja: {
              description: 'Japanese vendor title.',
              type: new NonNull(StringType),
            },
          }),
        }),
      },
      blurb: {
        description: 'A description of the new product.',
        type: new InputObject({
          name: `${uniqueName}BlurbInput`,
          fields: () => ({
            en: {
              description: 'English blurb.',
              type: new NonNull(StringType),
            },
            ja: {
              description: 'Japanese blurb.',
              type: new NonNull(StringType),
            },
          }),
        }),
      },
      quantities: {
        description: 'Availability stats for this new product.',
        type: new InputObject({
          name: `ProductQuantityInfo${uniqueName}`,
          fields: () => ({
            available: {
              description: 'The available quanitty for this product.',
              type: IntType,
            },
            inCarts: {
              description: 'The quantity for products currently in customers\' carts.',
              type: IntType,
            },
            purchased: {
              description: 'The quantity for products purchased by customers.',
              type: IntType,
            },
          }),
        }),
      },
    }),
  },
};
const mutations = {
  CreateProduct: { // This is only used from GraphiQL to seed database.
    type: rootType,
    description: 'Create new Product.',
    args: {
      product: {
        description: 'Object: All the important details for the product.',
        type: new NonNull(
          new InputObject({
            name: 'ProductObjectInput',
            fields: inputTypes.product.fields('CreateProduct'),
          }),
        ),
      },
      statistics: {
        description: 'Statistics on purchases for this item.',
        type: new InputObject({
          name: 'NewProductStatisticsInput',
          fields: () => ({
            adds_to_cart: {
              description: 'The amount of times someone has added this product to their cart.',
              type: IntType,
            },
            completed_checkouts: {
              description: 'The amount of times this item has been successfully purchased.',
              type: IntType,
            },
            transactions: {
              description: 'A list of transactions for this product.',
              type: new ListType(
                new InputObject({
                  name: 'NewProductTransactionInput',
                  fields: () => ({
                    transaction_id: {
                      description: 'The Mongo ID for transactions.',
                      type: MongoId,
                    },
                    user_id: {
                      description: 'The mongo ID for users.',
                      type: MongoId,
                    },
                  }),
                }),
              ),
            },
          }),
        }),
      },
    },
    resolve: (_, { product, statistics }, { Product }) => Product.createProduct(product, statistics),
  },
  FindProductAndUpdate: {
    type: rootType,
    description: 'Find product by ID and update.',
    args: {
      _id: {
        description: 'The mongo _id of the product to update.',
        type: new NonNull(MongoId),
      },
      newProduct: {
        description: 'Object: The updated product info.',
        type: new NonNull(
          new InputObject({
            name: 'UpdateProductObject',
            fields: inputTypes.product.fields('Update'),
          }),
        ),
      },
    },
    resolve: (_, { _id, newProduct }, { Product }) => Product.findProductAndUpdate(_id, newProduct),
  },
  FindProductByIdAndDelete: {
    type: rootType,
    description: 'Find product by ID and delete the product.',
    args: {
      _id: {
        description: 'The Mongo _id of the product.',
        type: new NonNull(MongoId),
      },
    },
    resolve: (_, { _id }, { Product }) => Product.findProductByIdAndDelete(_id),
  },
};

export default {
  rootType,
  queries,
  mutations,
};
