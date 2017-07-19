import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ShoppingCartTotal({ cart, taxes, grandTotal, newUser }) {
  const { discount, totalQty, subTotal } = cart.reduce((accum, next) => {
    if (!!next.qty) {
      accum.totalQty += next.qty;
      accum.subTotal += (Number(next.price) * next.qty);
      return accum;
    }
    return accum;
  }, {
    totalQty: 0,
    subTotal: 0,
    discount: {
      qty: false,
      qtyAmount: 0,
      register: false,
      registerAmount: 0,
    },
  });

  if (totalQty >= 4) {
    discount.qty = true;
    discount.qtyAmount = subTotal * 0.25;
    grandTotal -= discount.qtyAmount;
  }

  if (newUser) {
    discount.register = true;
    discount.qtyAmount = subTotal * 0.1;
    grandTotal -= discount.qtyAmount;
  }

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
      {
        discount.qty &&
          <div className="shopping-cart-analysis-taxes">
            <div className="shopping-cart-analysis-taxes-title">
              <h3 className="title required">Quantity Discount</h3>
            </div>
            <div className="shopping-cart-analysis-taxes-cost">
              <FontAwesome name="usd" />
              <h3>{'\u00A0'}-{discount.qtyAmount.toFixed(2)}</h3>
            </div>
          </div>
      }

      {
        discount.register &&
          <div className="shopping-cart-analysis-taxes">
            <div className="shopping-cart-analysis-taxes-title">
              <h3 className="title required">Register Discount</h3>
            </div>
            <div className="shopping-cart-analysis-taxes-cost">
              <FontAwesome name="usd" />
              <h3>{'\u00A0'}-{discount.registerAmount.toFixed(2)}</h3>
            </div>
          </div>

      }

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
const { arrayOf, object, bool, number } = PropTypes;
ShoppingCartTotal.propTypes = {
  cart: arrayOf(object).isRequired,
  taxes: number.isRequired,
  newUser: bool.isRequired,
  grandTotal: number.isRequired,
};
export default ShoppingCartTotal;
