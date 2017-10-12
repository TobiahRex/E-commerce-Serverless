import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function CreditCardNumber() {
  return (
    <div className="input__row">
      <div className="input__row--cc-number">
        <p>
          <IntlMsg id="checkout.credit-card.number" />&nbsp;
          <span className="required">*</span>
        </p>
        <div id="sq-card-number" />
      </div>
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
