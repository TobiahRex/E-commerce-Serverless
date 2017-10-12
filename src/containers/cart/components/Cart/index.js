import React from 'react';
import PropTypes from 'prop-types';
import {
  ErrorMsg,
  ActionBtns,
  ClearCartBtn,
  TotalSummary,
  ProductTable,
} from '../';

function Cart({
  error,
  errorMsg,
  cart,
  taxes,
  total,
  emptyCart,
  grandTotal,
  routerPush,
  routerBack,
  showProductRow,
}) {
  return (
    <div className="shopping-cart">
      <ProductTable
        cart={cart}
        taxes={taxes}
        grandTotal={grandTotal}
        showProductRow={showProductRow}
      />

      <ErrorMsg
        error={error}
        errorMsg={errorMsg[IntlLocale]}
      />

      <ClearCartBtn emptyCart={emptyCart} />

      <TotalSummary total={total} />

      <ActionBtns
        routerPush={routerPush}
        routerBack={routerBack}
      />
    </div>
  );
}
const {
  func,
  number,
  arrayOf,
  object,
  bool,
  shape,
  string,
} = PropTypes;
Cart.propTypes = {
  error: shape({
    hard: bool,
    soft: bool,
  }).isRequired,
  errorMsg: shape({
    en: string,
    ja: string,
  }).isRequired,
  cart: arrayOf(object),
  taxes: number,
  grandTotal: number,
  routerPush: func.isRequired,
  routerBack: func.isRequired,
  showProductRow: func.isRequired,
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
Cart.defaultProps = {
  cart: [],
  taxes: 0,
  grandTotal: 0,
};
export default Cart;
