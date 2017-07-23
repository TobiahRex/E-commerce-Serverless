import PropTypes from 'prop-types';

const { number, string, shape, bool, func, arrayOf, object } = PropTypes;

export const propTypes = {
  qty: number.isRequired,
  push: func.isRequired,
  userId: string.isRequired,
  loggedIn: bool.isRequired,
  guestCart: arrayOf(object),
  saveUser: func.isRequired,
  saveGuestCart: func.isRequired,
  DeleteFromMemberCart: func.isRequired,
  FetchMultipleProducts: func.isRequired,
  data: shape({
    FetchUserProfile: shape({
      qty: number,
      strength: number,
      product: shape({
        title: string,
        sku: string,
        price: string,
        vendor: string,
        flavor: string,
        images: shape({
          purpose: string,
          url: string,
        }),
      }),
    }),
  }),
  userCart: arrayOf(
    shape({
      qty: number,
      productId: string,
    }),
  ),
};
export const defaultProps = {
  data: null,
  guestCart: null,
  userCart: null,
};
