import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function FirstName({
  handleOnChange,
  shippingFirstName,
}) {
  return (
    <div className="input__row--first-name">
      <p>
        <IntlMsg id="checkout.shipping-address.given-name" />&nbsp;
        <span className="required">*</span>
      </p>
      <Validation.components.Input
        errorClassName="is-invalid-input"
        type="text"
        containerClassName=""
        name="shippingFirstName"
        validations={['required', 'alpha']}
        onChange={handleOnChange}
        value={shippingFirstName}
      />
    </div>
  );
}
const FirstNameWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(FirstName);

FirstName.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  shippingFirstName: PropTypes.string.isRequired,
};
export default FirstNameWithLifecycle;
