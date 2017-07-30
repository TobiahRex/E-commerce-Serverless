import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function Discounts({ discount }) {
  if (discount.qty) {
    return (
      <div className="analysis-container--discount">
        <p>Quantity Discount</p>
        <p>
          <FontAwesome name="usd" />
          {'\u00A0'}-{discount.qty.amount.toFixed(2)}
        </p>
      </div>
    );
  }

  if (discount.register) {
    return (
      <div className="analysis-container--discount">
        <p>New Member Discount</p>
        <p>
          <FontAwesome name="usd" />
          {'\u00A0'}-{discount.register.amount.toFixed(2)}
        </p>
      </div>
    );
  }

  return '';
}

const { number, bool, shape } = PropTypes;

Discounts.propTypes = {
  discount: shape({
    qty: bool.isRequired,
    qtyAmount: number.isRequired,
    register: bool.isRequired,
    registerAmount: number.isRequired,
  }).isRequired,
};
export default Discounts;
