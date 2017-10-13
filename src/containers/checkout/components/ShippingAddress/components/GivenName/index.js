import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function GivenName({
  handleOnChange,
  shippingFirstName,
}) {
  return (
    <div className="name-section__container">
      <label className="container__label" htmlFor="Given-Name">
        <IntlMsg id="checkout.shipping-address.given-name" />&nbsp;
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Input
        errorClassName="form__error-blurb"
        type="text"
        containerClassName="container__text-field"
        name="shippingFirstName"
        validations={['required', 'alpha']}
        onChange={handleOnChange}
        value={shippingFirstName}
      />
    </div>
  );
}
const GivenNameWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(GivenName);

GivenName.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  shippingFirstName: PropTypes.string.isRequired,
};
export default GivenNameWithLifecycle;
