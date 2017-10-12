import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function City({
  city,
  type,
  handleOnChange,
}) {
  return (
    <div className="input__row">
      <div className="input__row--city">
        <p>
          <IntlMsg id="checkout.shipping-address.city" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name={`${type}City`}
          validations={['required', 'alpha', 'city']}
          onChange={handleOnChange}
          value={city}
        />
      </div>
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
