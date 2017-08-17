import PropTypes from 'prop-types';

const {
 any,
 func,
 bool,
 shape,
 string,
 number,
 arrayOf,
 objectOf,
} = PropTypes;

export const propTypes = {
  qty: number.isRequired,
  push: func.isRequired,
  userId: string,
  newUser: bool.isRequired,
  taxRate: number.isRequired,
  loggedIn: bool.isRequired,
  saveUser: func.isRequired,
  saveGuest: func.isRequired,
  mobileActive: bool.isRequired,
  EmptyMemberCart: func.isRequired,
  DeleteFromMemberCart: func.isRequired,
  FetchMultipleProducts: objectOf(any).isRequired,
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
};

export const defaultProps = {
  userId: '',
  userCart: null,
  guestCart: null,
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
