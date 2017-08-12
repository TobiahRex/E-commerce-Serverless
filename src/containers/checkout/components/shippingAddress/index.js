import React from 'react';
import PropTypes from 'prop-types';

function ShippingAddress({ children }) {
  return (
    <div className="checkout__shipping">
      <div className="title">
        <h3>Shipping Address</h3>
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
