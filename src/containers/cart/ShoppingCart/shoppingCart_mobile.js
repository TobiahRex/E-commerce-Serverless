import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ShoppingCartMobile({
  cart,
  taxes,
  newUser,
  grandTotal,
  routerPush,
  mobileActive,
  showProductRow,
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
        {showProductRow(
          cart,
          taxes,
          newUser,
          grandTotal,
          mobileActive,
        )}
      </div>
    </div>
  );
}
const { func, number, arrayOf, object, bool } = PropTypes;
ShoppingCartMobile.propTypes = {
  routerPush: func.isRequired,
  showProductRow: func.isRequired,
  cart: arrayOf(object),
  taxes: number,
  newUser: bool.isRequired,
  grandTotal: number,
  mobileActive: bool.isRequired,
};
ShoppingCartMobile.defaultProps = {
  cart: [],
  taxes: 0,
  grandTotal: 0,
};
export default ShoppingCartMobile;
