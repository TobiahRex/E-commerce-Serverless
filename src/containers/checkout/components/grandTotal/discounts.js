import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function Discounts({ title, amount }) {
  return (
    <div className="analysis-container--discount">
      <p>{title} Discount</p>
      <p>
        <FontAwesome name="usd" />
        {'\u00A0'}-{amount.toFixed(2)}
      </p>
    </div>
  );
}

const { string, number } = PropTypes;

Discounts.propTypes = {
  title: string.isRequired,
  amount: number.isRequired,
};

export default Discounts;
