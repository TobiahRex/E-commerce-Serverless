import PropTypes from 'prop-types';

const { shape, number, string, arrayOf } = PropTypes;

const ProductShape = shape({
  _id: string,
  product: shape({
    qty: number,
    price: string,
    title: string,
    routeTag: string,
    strength: number,
    mainTitle: string,
    nicotineStrength: string,
    images: arrayOf(shape({
      purpose: string,
      url: string,
    })),
    quantities: shape({
      available: number,
      in_cart: number,
    }),
  }),
});
export default ProductShape;
