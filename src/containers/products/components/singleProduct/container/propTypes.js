import PropTypes from 'prop-types';

const {
  any,
  func,
  number,
  bool,
  string,
  shape,
  arrayOf,
  objectOf,
} = PropTypes;

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

export const propTypes = {
  push: func.isRequired,
  userId: string,
  flavor: string,
  taxRate: number.isRequired,
  loggedIn: bool.isRequired,
  saveUser: func.isRequired,
  addToGuestCart: func.isRequired,
  AddToMemberCart: func.isRequired,
  saveGuestCart: func.isRequired,
  EditToMemberCart: func.isRequired,
  addToReduxMemberCart: func.isRequired,
  addToReduxProfileCart: func.isRequired,
  updateToReduxMemberCart: func.isRequired,
  userCart: arrayOf(
    shape({
      qty: number,
      strength: number,
      product: string,
    }),
  ),
  guestCart: arrayOf(
    shape({
      _id: string,
      qty: number,
      strength: number,
      userId: string,
      product: objectOf(any),
    }),
  ),
  data: shape({
    FindProductById: ProductShape,
    FindProductsByFlavor: arrayOf(ProductShape),
  }).isRequired,
};
export const defaultProps = {
  userId: '',
  userCart: null,
  guestCart: null,
};
