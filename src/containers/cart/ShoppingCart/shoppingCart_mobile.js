import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

function ShoppingCartMobile({ showProducts }) {
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
        {showProducts()}
      </div>
    </div>
  );
}
const { func } = PropTypes;
const propTypes = { showProducts: func.isRequired };
ShoppingCartMobile.propTypes = propTypes;
export default ShoppingCartMobile;
