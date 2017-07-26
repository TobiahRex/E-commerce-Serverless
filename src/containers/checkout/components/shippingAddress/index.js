import React from 'react';
import PropTypes from 'prop-types';

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
  SameAsBilling,
} from './component.imports';

function ShippingAddress({
  sameAsBilling,
  handleSameAsBilling,
}) {
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

      <PrefectureState />

      <PostalCode />

      <City />

      <PhoneNumber />

      <SameAsBilling
        sameAsBilling={sameAsBilling}
        handleSameAsBilling={handleSameAsBilling}
      />
    </div>
  );
}
ShippingAddress.propTypes = {
  sameAsBilling: PropTypes.func.isRequired,
  handleSameAsBilling: PropTypes.string.isRequired,
};
export default ShippingAddress;
