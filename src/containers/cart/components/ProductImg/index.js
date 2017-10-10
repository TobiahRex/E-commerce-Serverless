import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function ProductImg({ productObj }) {
  return (
    <div className="juice-container__img-container">
      <div className="img-container__blur-div" />
      <Link to={`/juice/${productObj.product.slug}`}>
        <img
          alt={productObj.product.title[IntlLocale]}
          className="img-container__img"
          src={productObj.product.images[0].url}
        />
      </Link>
    </div>
  );
}
const { shape, string, func } = PropTypes;
ProductImg.propTypes = {
  deleteFromCart: func.isRequired,
  productObj: shape({
    _id: string,
    product: shape({
      slug: string,
      sku: string,
      nicotineStrength: string,
      title: shape({
        en: string,
        ja: string,
      }),
    }),
  }).isRequired,
};
export default ProductImg;
