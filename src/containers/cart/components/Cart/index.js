import React from 'react';
import PropTypes from 'prop-types';
import {
  ActionBtns,
  ClearCartBtn,
  TotalSummary,
  ProductTable,
} from '../';

function Cart({
  cart,
  taxes,
  total,
  emptyCart,
  grandTotal,
  routerPush,
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

      <ClearCartBtn emptyCart={emptyCart} />

      <TotalSummary total={total} />

      <ActionBtns routerPush={routerPush} />
    </div>

  );
}
const { func, number, arrayOf, object, bool, shape } = PropTypes;
Cart.propTypes = {
  cart: arrayOf(object),
  taxes: number,
  grandTotal: number,
  routerPush: func.isRequired,
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
