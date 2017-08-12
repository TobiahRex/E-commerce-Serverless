import React from 'react';
import PropTypes from 'prop-types';
// import _ from 'lodash';

// import {
//   FirstName,
//   LastName,
//   Email,
//   AddressLine,
//   Country,
//   Prefecture,
//   PostalCode,
//   City,
//   PhoneNumber,
// } from './component.imports';

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
const { objectOf, any } = PropTypes;
ShippingAddress.propTypes = {
  children: objectOf(any),
  // shippingFirstName: string.isRequired,
  // shippingLastName: string.isRequired,
  // shippingEmail: string.isRequired,
  // shippingAddressLine1: string.isRequired,
  // shippingAddressLine2: string.isRequired,
  // shippingCountry: string.isRequired,
  // shippingPrefecture: string.isRequired,
  // shippingCity: string.isRequired,
  // shippingPostalCode: string.isRequired,
  // shippingPhoneNumber: string.isRequired,
  // handleOnChange: func.isRequired,
};
export default ShippingAddress;
