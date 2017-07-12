import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ShoppingCartMobile({
  taxes,
  cartItems,
  grandTotal,
  routerPush,
  mobileActive,
  showProducts
}) {
  return (
    <div className="shopping-cart-mobile-parent">
      <div className="shopping-cart-mobile-action-btn-top">
        <button
          data-slug="express_checkout"
          className="shopping-cart-mobile-action-btn-top-checkout sweep-right" onClick={routerPush}
        >
          <span className="btn-flex-parent">
            <FontAwesome name="credit-card-alt" />
            {'\u0020'}Express Checkout
          </span>
        </button>
      </div>
      <div className="shopping-cart-mobile-product-list">
        {showProducts(taxes, grandTotal, mobileActive, cart)}
      </div>
    </div>
  );
}
const { func } = PropTypes;
const propTypes = { showProducts: func.isRequired };
ShoppingCartMobile.propTypes = propTypes;
export default ShoppingCartMobile;
