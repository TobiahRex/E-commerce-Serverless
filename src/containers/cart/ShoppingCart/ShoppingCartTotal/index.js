import React from 'react';
import PropTypes from 'prop-types';

function ShoppingCartTotal = () => {
  return (
    <div className="shopping-cart-analysis-main">
      <div className="shopping-cart-analysis-taxes">
        <div className="shopping-cart-analysis-taxes-title">
          <h3 className="title">Taxes</h3>
        </div>
        <div className="shopping-cart-analysis-taxes-cost">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{`${taxes.toFixed(2)}`}</h3>
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
    </div>}
  )
}
const {  } = PropTypes;
ShoppingCartTotal.propTypes = {
  taxes: string.isRequired,
  grandTotal: number.isRequired,
  mobileActive: bool.isRequired,
}
export default ShoppingCartTotal;
