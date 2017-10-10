import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  nicotineStrengthConverter as NicotineStrengthConverter,
} from '../../assets/utils';

function ProductDetails({ productObj, deleteFromCart }) {
  return (
    <div className="juice-container__product-details">
      <div className="product-details__title">
        <div className="title__blurb">
          <Link to={`/juice/${productObj.product.slug}`}>
            <p>{productObj.product.title[IntlLocale]}</p>
          </Link>
        </div>
      </div>
      <div className="product-details__nicotine">
        <div className="nicotine__blurb">
          <IntlMsg id="cart.table.details.nstrength" />&nbsp;
          <i>
            {
              NicotineStrengthConverter(
                productObj.product.nicotineStrength,
              )
            }
          </i>
        </div>
      </div>
      <div className="product-details__sku">
        <div className="sku__blurb">
          SKU:&nbsp;
          {productObj.product.sku}
        </div>
      </div>
      <div className="product-details__delete-container">
        <button
          data-id={productObj._id}
          className="delete-container__button w-button"
          onClick={deleteFromCart}
        >
          <FontAwesome name="trash-o" />
        </button>
      </div>
    </div>
  );
}
const { shape, string, func } = PropTypes;
ProductDetails.propTypes = {
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
export default ProductDetails;
