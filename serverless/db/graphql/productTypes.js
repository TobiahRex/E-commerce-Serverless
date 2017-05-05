import {
  GraphQLList as ListType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const ProductTypes = {
  // rootType:
  popularJuices: {
    mainTitle: {
      type: NonNull(StringType),
      description: 'Main title for Single Juice page.',
    },
    title: {
      type: NonNull(StringType),
      description: 'Name of the product.',
    },
    price: {
      type: NonNull(StringType),
      description: 'The price of the product.'
    },
    nicotine_strengths: {
      type: NonNull(ListType),
      description: 'An array of strings'
    },
    routeTag: NonNull(StringType),
    images: NonNull(new ListType(
      new InputObject({
        name: 'PopularJuiceImageObject',
        description:
      }),
    )),
  },
};
export default ProductTypes;
