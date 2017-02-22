import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  renderMobileJuices: PropTypes.func.isRequired,
};

function ShoppingCartMobile({ renderMobileJuices }) {
  return (
    <div className="shopping-cart-mobile-parent">
      <div className="shopping-cart-mobile-action-btn-top">
        <button className="shopping-cart-mobile-action-btn-top-checkout sweep-right">
          <FontAwesome name="credit-card-alt" />
          {'\u0020'}Express Checkout
        </button>
      </div>
      <ul className="shopping-cart-mobile-product-list">

      </ul>
    </div>
  );
}

ShoppingCartMobile.propTypes = propTypes;
export default ShoppingCartMobile;
