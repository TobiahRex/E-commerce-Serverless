import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function GivenName({
  handleOnChange,
  shippingName,
}) {
  return (
    <div className="name-section__container">
      <label className="container__label" htmlFor="givenName">
        <IntlMsg id="checkout.shipping-address.given-name" />&nbsp;
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Input
        id="givenName"
        errorClassName="form__error-blurb"
        type="text"
        containerClassName="container__text-field"
        name="shippingFirstName"
        validations={['required', 'alpha']}
        onChange={handleOnChange}
        value={shippingName}
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

const { string, func } = PropTypes;
GivenName.propTypes = {
  intlId: string.isRequired,
  identifier: string.isRequired,
  handleOnChange: func.isRequired,
  shippingName: string.isRequired,
};
export default GivenNameWithLifecycle;
