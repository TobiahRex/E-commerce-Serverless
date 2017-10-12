import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function FamilyName({
  handleOnChange,
  shippingLastName,
}) {
  return (
    <div className="input__row--last-name">
      <p>
        <IntlMsg id="checkout.shipping-address.last-name" />&nbsp;
        <span className="required">*</span>
      </p>
      <Validation.components.Input
        errorClassName="is-invalid-input"
        type="text"
        containerClassName=""
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
