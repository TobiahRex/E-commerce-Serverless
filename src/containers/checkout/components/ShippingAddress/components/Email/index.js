import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function Email({
  handleOnChange,
  shippingEmail,
}) {
  return (
    <div className="email-section__container">
      <label className="form__label" htmlFor="email">
        <IntlMsg id="checkout.shipping-address.email" />&nbsp;
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Input
        id="email"
        errorClassName="form__error-blurb"
        type="email"
        containerClassName="container__text-field"
        name="shippingEmail"
        validations={['required', 'email']}
        onChange={handleOnChange}
        value={shippingEmail}
      />
    </div>
  );
}
const EmailWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(Email);

Email.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  shippingEmail: PropTypes.string.isRequired,
};
export default EmailWithLifecycle;
