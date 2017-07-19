import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import ShoppingCartTotal from './ShoppingCartTotal';

function ShoppingCartWeb({
  cart,
  taxes,
  newUser,
  grandTotal,
  routerPush,
  mobileActive,
  showProductRow,
}) {
  return (
    <div className="shopping-cart-web-parent">
      <table className="shopping-cart-table">
        <thead className="shopping-cart-table-header-container">
          <tr className="shopping-cart-table-header-titles">
            <th className="shopping-cart-table-header-juice">
              <h3>Juice</h3>
            </th>
            <th className="shopping-cart-table-header-price">
              <h3>Price</h3>
            </th>
            <th className="shopping-cart-table-header-qty">
              <h3>Quantity</h3>
            </th>
            <th className="shopping-cart-table-header-total">
              <h3>Total</h3>
            </th>
          </tr>
        </thead>
        <tbody className="shopping-cart-table-body-container">
          {showProductRow(
            cart,
            taxes,
            grandTotal,
            mobileActive,
          )}
        </tbody>
      </table>

      <ShoppingCartTotal
        cart={cart}
        taxes={taxes}
        grandTotal={grandTotal}
        newUser={newUser}
      />

      <div className="shopping-cart-action-btns-parent">
        <button
          data-slug="express_checkout"
          className="shopping-cart-action-btn-checkout sweep-right"
          onClick={routerPush}
        >
          <span className="btn-flex-parent">
            <FontAwesome name="credit-card-alt" />
            {'\u0020'}Express Checkout
          </span>
        </button>
        <button className="shopping-cart-action-btn-clear sweep-right">
          <span className="btn-flex-parent">
            Clear Shopping Cart
          </span>
        </button>
      </div>
      <div className="shopping-cart-back-parent">
        <button
          data-slug="/"
          className="shopping-cart-back sweep-right"
          onClick={routerPush}
        >
          Back To Homepage
        </button>
      </div>
    </div>
  );
}
const { func, number, arrayOf, object, bool } = PropTypes;
ShoppingCartWeb.propTypes = {
  cart: arrayOf(object),
  taxes: number,
  newUser: bool.isRequired,
  grandTotal: number,
  routerPush: func.isRequired,
  showProductRow: func.isRequired,
  mobileActive: bool.isRequired,
};
ShoppingCartWeb.defaultProps = {
  cart: [],
  taxes: '0.00', // converted to string to ensure 2 decimal places.
  grandTotal: 0, // will be converted to string for same reasons in JSX.
};
export default ShoppingCartWeb;
