import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function PostalCode({
  validatePostal,
  handleOnChange,
  shippingPostalCode,
  clearValidationError,
}) {
  return (
    <div className="postal-section__container">
      <label className="form__label" htmlFor="postalCode">
        <IntlMsg id="checkout.shipping-address.postal" />&nbsp;
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Input
        errorClassName="form__error-blurb"
        type="text"
        containerClassName="container__text-field"
        name="shippingPostalCode"
        validations={['required', 'japan-postal']}
        onChange={handleOnChange}
        onBlur={validatePostal}
        onFocus={() => clearValidationError('shippingPostalCode')}
        value={shippingPostalCode}
      />
    </div>
  );
}
const PostalCodeWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(PostalCode);
const { func, string } = PropTypes;
PostalCode.propTypes = {
  handleOnChange: func.isRequired,
  validatePostal: func.isRequired,
  shippingPostalCode: string,
  clearValidationError: func.isRequired,
};

PostalCode.defaultProps = {
  apiError: '',
  shippingPostalCode: '',
};

export default PostalCodeWithLifecycle;
