import PropTypes from 'prop-types';

const { arrayOf, shape, bool, func, string, number } = PropTypes;

const ProductShape = shape({
  _id: string,
  product: shape({
    qty: number,
    price: string,
    title: string,
    slug: string,
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

export const propTypes = {
  qty: number.isRequired,
  // fbLike: func.isRequired,
  added: bool,
  error: bool,
  errorMsg: string,
  loggedIn: bool.isRequired,
  qtyHandler: func.isRequired,
  modalHandler: func.isRequired,
  productsArray: arrayOf(ProductShape),
  chosenStrength: number.isRequired,
  nicotineHandler: func.isRequired,
  addToCartHandler: func.isRequired,
};
export const defaultProps = {
  added: false,
  error: false,
  errorMsg: '',
};
