import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function CreditCardExpire() {
  return (
    <div className="cc-expire-section__container">
      <label className="form__label" htmlFor="cc-number">
        <IntlMsg id="checkout.credit-card.expiration" />&nbsp;
        <em className="label__asterisk">*</em>
      </label>
      <div id="sq-expiration-date" />
    </div>
  );
}
const CreditCardExpireWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(CreditCardExpire);
export default CreditCardExpireWithLifecycle;
