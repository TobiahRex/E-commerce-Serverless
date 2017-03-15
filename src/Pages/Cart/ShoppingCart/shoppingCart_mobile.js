import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

const propTypes = {
  renderMobileJuices: PropTypes.func.isRequired,
};

function ShoppingCartMobile({ renderMobileJuices }) {
  return (
    <div className="shopping-cart-mobile-parent">
      <div className="shopping-cart-mobile-action-btn-top">
        <button className="shopping-cart-mobile-action-btn-top-checkout sweep-right" onClick={() => browserHistory.push('/express_checkout')}>
          <span className="btn-flex-parent">
            <FontAwesome name="credit-card-alt" />
            {'\u0020'}Express Checkout
          </span>
        </button>
      </div>
      <div className="shopping-cart-mobile-product-list">
        {renderMobileJuices()}
      </div>
    </div>
  );
}

ShoppingCartMobile.propTypes = propTypes;
export default ShoppingCartMobile;
