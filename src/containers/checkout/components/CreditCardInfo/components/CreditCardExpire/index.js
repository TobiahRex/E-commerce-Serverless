import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';


function CreditCardExpiration() {
  return (
    <div className="input__row">
      <div className="input__row--exp-date">

        <div className="input__container--exp-month">
          <p>
            <IntlMsg id="checkout.credit-card.expiration" />&nbsp;
            <span className="required">*</span>
          </p>

          <div id="sq-expiration-date" />
        </div>
      </div>
    </div>
  );
}
const CreditCardExpirationWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(CreditCardExpiration);
export default CreditCardExpirationWithLifecycle;
