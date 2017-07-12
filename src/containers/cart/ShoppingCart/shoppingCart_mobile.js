import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ShoppingCartMobile({
  cart,
  taxes,
  grandTotal,
  routerPush,
  mobileActive,
  showProducts,
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
const { func, number, arrayOf, object, bool } = PropTypes;
ShoppingCartMobile.propTypes = {
  cart: arrayOf(object),
  taxes: number,
  grandTotal: number,
  routerPush: func.isRequired,
  showProducts: func.isRequired,
  mobileActive: bool.isRequired,
};
ShoppingCartMobile.defaultProps = {
  cart: [],
  taxes: 0,
  grandTotal: 0,
};
export default ShoppingCartMobile;
