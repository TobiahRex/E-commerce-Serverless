import PropTypes from 'prop-types';

const { number, string, shape, bool, func, arrayOf, objectOf, object, any } = PropTypes;

export const propTypes = {
  qty: number.isRequired,
  push: func.isRequired,
  loggedIn: bool.isRequired,
  guestCart: arrayOf(object),
  saveUser: func.isRequired,
  updateToGuestCart: func.isRequired,
  DeleteFromMemberCart: func.isRequired,
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
  activeUser: shape({
    _id: string,
    shopping: shape({
      cart: arrayOf(shape({
        qty: number,
        strength: number,
        product: string,
      })),
    }),
    name: objectOf(any),
    pictures: objectOf(any),
    authentication: objectOf(any),
    contactInfo: objectOf(any),
    permissions: objectOf(any),
    userStory: objectOf(any),
    marketHero: objectOf(any),
    socialProfileBlob: objectOf(any),
  }),
};
export const defaultProps = {
  data: null,
  guestCart: null,
  activeUser: null,
};
