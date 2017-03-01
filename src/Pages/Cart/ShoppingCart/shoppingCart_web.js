import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  renderWebJuices: PropTypes.func.isRequired,
  grandTotal: PropTypes.number,
  taxes: PropTypes.number,
};

function ShoppingCartWeb({ renderWebJuices, grandTotal, taxes }) {
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
          {renderWebJuices()}
        </tbody>
      </table>
      <div className="shopping-cart-analysis-main">
        <div className="shopping-cart-analysis-taxes">
          <div className="shopping-cart-analysis-taxes-title">
            <h3 className="title">Taxes</h3>
          </div>
          <div className="shopping-cart-analysis-taxes-cost">
            <FontAwesome name="usd" />
            <h3>{'\u00A0'}{`${taxes}`}</h3>
          </div>
        </div>
        <div className="shopping-cart-analysis-grand-total">
          <div className="shopping-cart-analysis-grand-total-title">
            <h3 className="title">Grand Total</h3>
          </div>
          <div className="shopping-cart-analysis-grand-total-cost">
            <FontAwesome name="usd" />
            <h3>{'\u00A0'}{`${grandTotal}`}</h3>
          </div>
        </div>
      </div>
      <div className="shopping-cart-action-btns-parent">
        <button className="shopping-cart-action-btn-checkout sweep-right" onClick={() => browserHistory.push('/express_checkout')}>
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
        <button className="shopping-cart-back sweep-right" onClick={() => browserHistory.push('/')}>
          Back To Homepage
        </button>
      </div>
    </div>
  );
}

ShoppingCartWeb.propTypes = propTypes;
export default ShoppingCartWeb;
