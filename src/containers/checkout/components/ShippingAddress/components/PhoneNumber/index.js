import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function PhoneNumber({
  type,
  phoneNumber,
  handleOnChange,
}) {
  return (
    <div className="phone-section__container">
      <label className="form__label" htmlFor="city">
        <IntlMsg id="checkout.shipping-address.phone" />
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Input
        errorClassName="form__error-blurb"
        type="string"
        containerClassName="container__text-field"
        name={`${type}PhoneNumber`}
        validations={['required', 'numeric', 'phone-startWithZero', 'phone-japanLength']}
        onChange={handleOnChange}
        value={phoneNumber}
      />
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
