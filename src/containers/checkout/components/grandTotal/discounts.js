import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function Discounts({ title, amount }) {
  return (
    <div className="analysis-container--discount">
      <p>{title}&nbsp;
        <IntlMsg id="checkout.total.subtotal.discount.title" />
      </p>
      <p>
        <FontAwesome name="usd" />&nbps;
        -{amount.toFixed(2)}
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
