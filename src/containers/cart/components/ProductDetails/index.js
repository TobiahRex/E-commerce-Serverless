import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ProductDetails({ productObj, deleteFromCart }) {
  return (
    <div className="juice-container__product-details">
      <div className="product-details__title">
        <div className="title__blurb">
          French Vanilla Mocha
        </div>
      </div>
      <div className="product-details__nicotine">
        <div className="nicotine__blurb">
          Nicotine Strength:&nbsp;
          8 mg
        </div>
      </div>
      <div className="product-details__sku">
        <div className="sku__blurb">
          SKU:&nbsp;
          NJ2JP0001
        </div>
      </div>
      <div className="product-details__delete-container">
        <button className="delete-container__button w-button" href="#">
          <FontAwesome name="trash" />
        </button>
      </div>
    </div>
  );
}
export default ProductDetails;
