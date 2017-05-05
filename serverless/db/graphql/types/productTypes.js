import {
  GraphQLList as ListType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const ProductTypes = {
  // rootType:
  popularProducts: new ObjectType({
    name: 'PopularProductsType',
    description: 'The (qty) most popular products.',
    fields: () => ({
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
      images: new ListType(
        new InputObject({
          name: 'PopularProductImageObject',
          description: 'Images for the product.',
          fields: () => ({
            purpose: { type: StringType },
            url: { type: StringType },
          }),
        }),
      ),
    }),
  }),
};
export default ProductTypes;
