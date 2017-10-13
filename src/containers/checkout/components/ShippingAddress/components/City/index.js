import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function City({
  city,
  type,
  handleOnChange,
}) {
  return (
    <div className="city-section__container">
      <label className="form__label" htmlFor="city">
        <IntlMsg id="checkout.shipping-address.city" />&nbsp;
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Input
        id="city"
        errorClassName="form__error-blurb"
        type="text"
        containerClassName="container__text-field"
        name={`${type}City`}
        validations={['required', 'alpha', 'city']}
        onChange={handleOnChange}
        value={city}
      />
    </div>
  );
}
const CityWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(City);

const { string, func } = PropTypes;
City.propTypes = {
  city: string.isRequired,
  type: string.isRequired,
  handleOnChange: func.isRequired,
};
export default CityWithLifecycle;
