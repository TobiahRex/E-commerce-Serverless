import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import ShoppingCartTotal from './ShoppingCartTotal';

function ShoppingCartWeb({
  cart,
  taxes,
  total,
  emptyCart,
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
              <h3>
                <IntlMsg id="cart.table.header.juice" />
              </h3>
            </th>
            <th className="shopping-cart-table-header-price">
              <h3>
                <IntlMsg id="cart.table.header.price" />
              </h3>
            </th>
            <th className="shopping-cart-table-header-qty">
              <h3>
                <IntlMsg id="cart.table.header.qty" />
              </h3>
            </th>
            <th className="shopping-cart-table-header-total">
              <h3>
                <IntlMsg id="cart.table.header.total" />
              </h3>
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
      
      <ShoppingCartTotal total={total} />

      <div className="shopping-cart-action-btns-parent">
        <button
          data-slug="express_checkout"
          className="shopping-cart-action-btn-checkout sweep-right"
          onClick={routerPush}
        >
          <span className="btn-flex-parent">
            <FontAwesome name="credit-card-alt" />&nbsp;
            <IntlMsg id="cart.action-btn.express-checkout" />
          </span>
        </button>
        <button
          className="shopping-cart-action-btn-clear sweep-right"
          onClick={emptyCart}
        >
          <span className="btn-flex-parent">
            <IntlMsg id="cart.action-btn.clear-cart" />
          </span>
        </button>
      </div>
      <div className="shopping-cart-back-parent">
        <button
          data-slug="/"
          className="shopping-cart-back sweep-right"
          onClick={routerPush}
        >
          <IntlMsg id="cart.action-btn.back-home" />
        </button>
      </div>
    </div>
  );
}

const {
  func,
  bool,
  shape,
  number,
  object,
  arrayOf,
} = PropTypes;

ShoppingCartWeb.propTypes = {
  cart: arrayOf(object),
  taxes: number,
  grandTotal: number,
  emptyCart: func.isRequired,
  routerPush: func.isRequired,
  mobileActive: bool.isRequired,
  showProductRow: func.isRequired,
  total: shape({
    discount: shape({
      qty: bool.isRequired,
      qtyAmount: number.isRequired,
      register: bool.isRequired,
      registerAmount: number.isRequired,
    }),
    taxes: number.isRequired,
    grandTotal: number.isRequired,
    subTotal: number.isRequired,
  }).isRequired,
};
ShoppingCartWeb.defaultProps = {
  cart: [],
  taxes: 0,
  grandTotal: 0,
};
export default ShoppingCartWeb;
