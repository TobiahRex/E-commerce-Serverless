import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';

function PostalCode({
  validatePostal,
  handleOnChange,
  shippingPostalCode,
  clearValidationError,
}) {
  return (
    <div className="input__row">
      <div className="input__row--postal-code">
        <p>
          <IntlMsg id="checkout.shipping-address.postal" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name="shippingPostalCode"
          validations={['required', 'japan-postal']}
          onChange={handleOnChange}
          onBlur={validatePostal}
          onFocus={() => clearValidationError('shippingPostalCode')}
          value={shippingPostalCode}
        />
      </div>
    </div>
  );
}

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

export default PostalCode;
