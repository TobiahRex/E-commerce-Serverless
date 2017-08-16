import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function Discounts({ discount }) {
  const render = [];
  if (discount.qty || discount.register) {
    if (discount.qty) {
      render.push(
        <div className="analysis-container--discount">
          <p>Quantity Discount</p>
          <p>
            <FontAwesome name="usd" />
            {'\u00A0'}-{discount.qtyAmount.toFixed(2)}
          </p>
        </div>,
      );
    }

    if (discount.register) {
      render.push(
        <div className="analysis-container--discount">
          <p>New Member Discount</p>
          <p>
            <FontAwesome name="usd" />
            {'\u00A0'}-{discount.registerAmount.toFixed(2)}
          </p>
        </div>,
      );
    }
    return render;
  }
  return <div className="analysis-container--discount" />;
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
