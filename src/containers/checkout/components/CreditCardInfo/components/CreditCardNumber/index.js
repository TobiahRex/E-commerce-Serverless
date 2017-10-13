import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function CreditCardNumber() {
  return (
    <div className="cc-number-section__container">
      <label className="form__label" htmlFor="cc-number">
        <IntlMsg id="checkout.credit-card.number" />&nbsp;
        <em className="label__asterisk">*</em>
      </label>
      <div id="sq-card-number" />
    </div>
  );
}
const CreditCardNumberWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(CreditCardNumber);
const { string, func } = PropTypes;
CreditCardNumber.propTypes = {
  ccNumber: string.isRequired,
  handleOnChange: func.isRequired,
};
export default CreditCardNumberWithLifecycle;
