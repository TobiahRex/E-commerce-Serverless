import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function Email({
  handleOnChange,
  shippingEmail,
}) {
  return (
    <div className="input__row">
      <div className="input__row--email">
        <p>
          <IntlMsg id="checkout.shipping-address.email" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="email"
          containerClassName=""
          name="shippingEmail"
          validations={['required', 'email']}
          onChange={handleOnChange}
          value={shippingEmail}
        />
      </div>
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
