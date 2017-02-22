import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // juiceObj: PropTypes.objectOf(PropTypes.any.isRequired),
  // keyNum: PropTypes.number.isRequired,
  // subTotal: PropTypes.number.isRequired,
};

function ShoppingCartMobile() {
  return (
    <div className="shopping-cart-mobile-parent">
      <div className="shopping-cart-mobile-action-btn-top">
        <button className="shopping-cart-mobile-action-btn-top-checkout sweep-right">
          <FontAwesome name="credit-card-alt" />
          {'\u0020'}Express Checkout
        </button>
      </div>
      div.shopping-cart-mobile-
    </div>
  );
}

ShoppingCartMobile.propTypes = propTypes;
export default ShoppingCartMobile;
