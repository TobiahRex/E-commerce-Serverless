import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function Country({ disabled }) {
  return (
    <div className={`country-section__container${disabled ? '-disabled' : ''}`}>
      <label className="form__label" htmlFor="Country">
        <IntlMsg id="checkout.shipping-address.country" />&nbsp;
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Input
        disabled={disabled}
        errorClassName="form__error-blurb"
        containerClassName="container__text-field"
        name="shippingCountry"
        type="text"
        validations={['required']}
        value="Japan"
        readOnly
      />
    </div>
  );
}
const CountryWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(Country);

Country.propTypes = {
  disabled: PropTypes.bool,
};
Country.defaultProps = {
  disabled: false,
};

export default CountryWithLifecycle;
