import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';

function Country({ disabled }) {
  return (
    <div className="input__row">
      <div className={`input__row--country${disabled ? '-disabled' : ''}`}>
        <p>
          <IntlMsg id="checkout.shipping-address.country" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Input
          disabled={disabled}
          errorClassName="is-invalid-input"
          name="shippingCountry"
          validations={['required']}
          value="Japan"
        />
      </div>
    </div>
  );
}
Country.propTypes = {
  disabled: PropTypes.bool,
};
Country.defaultProps = {
  disabled: false,
};

export default Country;
