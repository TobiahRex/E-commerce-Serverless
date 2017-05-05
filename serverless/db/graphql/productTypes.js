import {
  GraphQLList as ListType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const ProductTypes = {
  // rootType:
  popularProducts: {
    title: {
      type: new NonNull(StringType),
      description: 'Name of the product.',
    },
    flavor: {
      type: new NonNull(StringType),
      description: 'The flavor for the product (if applicable).',
    },
    price: {
      type: new NonNull(StringType),
      description: 'The price of the product.',
    },
    routeTag: {
      type: new NonNull(StringType),
      description: 'The name of the unique route for the product',
    },
    images: new NonNull(new ListType(
      new InputObject({
        name: 'PopularProductImageObject',
        description: 'Images for the product.',
        fields: () => ({
          purpose: { type: StringType },
          url: { type: StringType },
        }),
      }),
    )),
  },
};
export default ProductTypes;
