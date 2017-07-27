import React from 'react';

import {
  FirstName,
  LastName,
  Email,
  AddressLine,
  Country,
  Prefecture,
  PostalCode,
  City,
  PhoneNumber,
} from './component.imports';

function ShippingAddress() {
  return (
    <div className="checkout__shipping">
      <div className="title">
        <h3>Shipping Address</h3>
      </div>
      <div className="input__row">
        <FirstName />
        <LastName />
      </div>

      <Email />

      <AddressLine lineNumber={1} />

      <AddressLine lineNumber={2} />

      <Country />

      <Prefecture />

      <PostalCode />

      <City />

      <PhoneNumber />

    </div>
  );
}

export default ShippingAddress;
