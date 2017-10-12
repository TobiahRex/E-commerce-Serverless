import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function PhoneNumber({
  type,
  phoneNumber,
  handleOnChange,
}) {
  return (
    <div className="input__row">
      <div className="input__row--phone">
        <p>
          <IntlMsg id="checkout.shipping-address.phone" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="string"
          containerClassName=""
          name={`${type}PhoneNumber`}
          validations={['required', 'numeric', 'phone-startWithZero', 'phone-japanLength']}
          onChange={handleOnChange}
          value={phoneNumber}
        />
      </div>
    </div>
  );
}
const PhoneNumberWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(PhoneNumber);

const { string, func } = PropTypes;
PhoneNumber.propTypes = {
  type: string.isRequired,
  phoneNumber: string.isRequired,
  handleOnChange: func.isRequired,
};
export default PhoneNumberWithLifecycle;
