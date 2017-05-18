/* eslint-disable */
import PropTypes from 'prop-types';
const { arrayOf, shape, func, number, string } = PropTypes;
const propTypes = {
  popularProducts: arrayOf(
    shape({
      _id: string,  // MongoID (casted from ObjectID).
      product: shape({
        mainTitle: string,
        title: string,
        price: string,
        sku: string,
        sizes: arrayOf(string),
        nicotine_strengths: arrayOf(string),
        images: arrayOf(
          shape({
            purpose: string,
            url: string,
          })),
        routeTag: string,
        vendor: string,
        blurb: string,
        quantities: shape({
          available: number,
          in_cart: number,
        }),
      }),
      reviews: arrayOf(
        shape({
          reviews_id: string,
          user_id: string,
        }),
      ),
    })),
  push: func.isRequired,
}
