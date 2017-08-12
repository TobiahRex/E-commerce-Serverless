import PropTypes from 'prop-types';

const {
  func,
  bool,
  any,
  shape,
  object,
  string,
  number,
  arrayOf,
  objectOf,
} = PropTypes;

export const propTypes = {
  push: func.isRequired,
  loggedIn: bool.isRequired,
  newUser: bool.isRequired,
  userCart: arrayOf(object),
  guestCart: arrayOf(object),
  taxRate: number.isRequired,
  postalError: string,
  apiFetching: bool,
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
  SubmitFinalOrder: func,
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
  postalError: '',
  apiFetching: false,
};
