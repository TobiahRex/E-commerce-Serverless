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
    title: NonNull(StringType),
    price: NonNull(StringType),
    nicotine_strengths: NonNull(ListType),
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
