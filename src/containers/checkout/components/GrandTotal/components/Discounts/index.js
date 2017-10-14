import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

function Discounts({ title, amount }) {
  return (
    <div className="analysis-container__row">
      <div className="blurb__red row__blurb">
        {title}&nbsp;
        <IntlMsg id="checkout.total.subtotal.discount.title" />
      </div>
      <div className="price--red row__price">
        <FontAwesome name="usd" />&nbsp;
        -{amount.toFixed(2)}
      </div>
    </div>
  );
}

const { string, number } = PropTypes;

Discounts.propTypes = {
  title: string.isRequired,
  amount: number.isRequired,
};
export default Discounts;
