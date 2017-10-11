import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  ActionBtns,
  ClearCartBtn,
  ShoppingCartTotal,
} from '../';

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
              <h3><IntlMsg id="cart.table.header.juice" /></h3>
            </th>
            <th className="shopping-cart-table-header-price">
              <h3><IntlMsg id="cart.table.header.price" /></h3>
            </th>
            <th className="shopping-cart-table-header-qty">
              <h3><IntlMsg id="cart.table.header.qty" /></h3>
            </th>
            <th className="shopping-cart-table-header-total">
              <h3><IntlMsg id="cart.table.header.total" /></h3>
            </th>
          </tr>
        </thead>
        <tbody className="shopping-cart-table-body-container">
          {showProductRow(cart, taxes, grandTotal, mobileActive)}
        </tbody>
      </table>


      <ClearCartBtn emptyCart={emptyCart} />

      <ShoppingCartTotal total={total} />

      <ActionBtns routerPush={routerPush} />
    </div>
  );
}
const { func, number, arrayOf, object, bool, shape } = PropTypes;
ShoppingCartWeb.propTypes = {
  cart: arrayOf(object),
  taxes: number,
  grandTotal: number,
  routerPush: func.isRequired,
  showProductRow: func.isRequired,
  mobileActive: bool.isRequired,
  emptyCart: func.isRequired,
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
