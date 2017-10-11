import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ShippingAddress({ children }) {
  return (
    <div className="checkout__shipping">
      <div className="title">
        <h3><IntlMsg id="checkout.shipping-address.title" /></h3>
      </div>
      {children}
    </div>
  );
}
const { arrayOf, object } = PropTypes;

ShippingAddress.propTypes = {
  children: arrayOf(object).isRequired,
};

export default ShippingAddress;
