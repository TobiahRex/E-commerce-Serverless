import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function FamilyName({
  handleOnChange,
  shippingLastName,
}) {
  return (
    <div className="name-section__container">
      <label className="container__label" htmlFor="familyName">
        <IntlMsg id="checkout.shipping-address.last-name" />&nbsp;
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Input
        id="familyName"
        errorClassName="form__error-blurb"
        type="text"
        containerClassName="container__text-field"
        name="shippingLastName"
        validations={['required', 'alpha']}
        onChange={handleOnChange}
        value={shippingLastName}
      />
    </div>
  );
}
const FamilyNameWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(FamilyName);
FamilyName.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  shippingLastName: PropTypes.string.isRequired,
};
export default FamilyNameWithLifecycle;
