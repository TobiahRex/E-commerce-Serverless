import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ShoppingCartTotal({ taxes, grandTotal, cart, newUser }) {
  const results = cart.reduce((accum, next) => {
    if (!!next.price) {
      accum.totalQty += 1;

    }
    return accum;
  }, { totalQty: 0, registerDiscount: false, qtyDiscount: false, subtotal: 0 });

  return (
    <div className="shopping-cart-analysis-main">
      <div className="shopping-cart-analysis-taxes">
        <div className="shopping-cart-analysis-taxes-title">
          <h3 className="title">Subtotal</h3>
        </div>
        <div className="shopping-cart-analysis-taxes-cost">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{`${subTotal.toFixed(2)}`}</h3>
        </div>
      </div>
      <div className="shopping-cart-analysis-taxes">
        <div className="shopping-cart-analysis-taxes-title">
          <h3 className="title">Taxes</h3>
        </div>
        <div className="shopping-cart-analysis-taxes-cost">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{`${taxes.toFixed(2)}`}</h3>
        </div>
      </div>
      <div className="shopping-cart-analysis-taxes">
        <div className="shopping-cart-analysis-taxes-title">
          <h3 className="title">International Shipping</h3>
        </div>
        <div className="shopping-cart-analysis-taxes-cost">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}Free</h3>
        </div>
      </div>
      <div className="shopping-cart-analysis-taxes">
        <div className="shopping-cart-analysis-taxes-title">
          <h3 className="title required">Discount</h3>
        </div>
        <div className="shopping-cart-analysis-taxes-cost">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{discount.toFixed(2)}</h3>
        </div>
      </div>
      <div className="shopping-cart-analysis-grand-total">
        <div className="shopping-cart-analysis-grand-total-title">
          <h3 className="title">Grand Total</h3>
        </div>
        <div className="shopping-cart-analysis-grand-total-cost">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{`${grandTotal.toFixed(2)}`}</h3>
        </div>
      </div>
    </div>
  );
}
const { arrayOf, object, number } = PropTypes;
ShoppingCartTotal.propTypes = {
  cart: arrayOf(object).isRequired,
  taxes: number.isRequired,
  grandTotal: number.isRequired,
};
export default ShoppingCartTotal;
