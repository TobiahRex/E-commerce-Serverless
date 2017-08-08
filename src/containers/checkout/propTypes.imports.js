import PropTypes from 'prop-types';

const {
  arrayOf,
  object,
  func,
  number,
  bool,
  objectOf,
  any,
  shape,
} = PropTypes;

export const propTypes = {
  push: func.isRequired,
  loggedIn: bool.isRequired,
  newUser: bool.isRequired,
  userCart: arrayOf(object),
  guestCart: arrayOf(object),
  taxRate: number.isRequired,
  total: shape({
    discount: {
      qty: bool,
      qtyAmount: number,
      register: bool,
      registerAmount: number,
    },
    taxes: number,
    grandTotal: number,
    subTotal: number,
  }),
  SubmitFinalOrder: objectOf(any).isRequired,
  FetchMultipleProducts: objectOf(any).isRequired,
};
export const defaultProps = {
  userCart: [],
  guestCart: [],
  total: {
    discount: {
      qty: false,
      qtyAmount: 0,
      register: false,
      registerAmount: 0,
    },
    taxes: 0,
    grandTotal: 0,
    subTotal: 0,
  },
};
