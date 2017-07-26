import React from 'react';

import {
  FirstName,
  LastName,
  Email,
  AddressLine,
  Country,
  PrefectureState,
  PostalCode,
  City,
  PhoneNumber,
} from './component.imports';

function BillingAddress() {
  return (
    <div className="checkout__billing">
      <div className="title">
        <h3>Billing Address</h3>
      </div>
      <div className="input__row">
        <FirstName />
        <LastName />
      </div>

      <Email />

      <AddressLine lineNumber={1} />

      <AddressLine lineNumber={2} />

      <Country />

      <PrefectureState />

      <PostalCode />

      <City />

      <PhoneNumber />

      {/* TODO: MVP2
        <SameAsBilling />
              */}
    </div>
  );
}
export default BillingAddress;
