import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import {
  GivenName,
  FamilyName,
} from './components';
import './assets/styles/style.css';

function NameGroup({
  handleOnChange,
  shippingFirstName,
  shippingLastName,
}) {
  return (
    <div className="address-form__name-section">
      <GivenName
        shippingFirstName={shippingFirstName}
        handleOnChange={handleOnChange}
      />
      <FamilyName
        shippingLastName={shippingLastName}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}
const NameGroupWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(NameGroup);
NameGroup.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  shippingFirstName: PropTypes.string.isRequired,
  shippingLastName: PropTypes.string.isRequired,
};
export default NameGroupWithLifecycle;
