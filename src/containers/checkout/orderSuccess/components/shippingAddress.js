import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function OrderHeader({
  givenName,
  familyName,
  shippingAddress,
  shippingCity,
  shippingPrefecture,
  shippingPostalCode,
  shippingCountry,
  shippingPhone,
}) {
  return (
    <div className="addresses--shipto">
      <fieldset className="shipto--fieldset">
        <legend className="shipto__legend">
          <p>Ship To</p>
        </legend>
        <div className="shipto__name">
          <p className="name--firstName">{givenName}</p>
          <p className="name--lastName">{'\u00A0'}{familyName}</p>
        </div>
        <div className="shipto__address">
          <p>{shippingAddress}</p>
        </div>
        <div className="shipto__city-prefecture">
          <p className="city-prefecture--city">{shippingCity}</p>
          <p className="city-prefecture--prefecture">{shippingPrefecture}</p>
        </div>
        <div className="shipto__postal-code">
          <p>{shippingPostalCode}</p>
        </div>
        <div className="shipto__country">
          <p>{shippingCountry}</p>
        </div>
        <div className="shipto__telephone">
          <p className="telephone--area-code">
            {`(${shippingPhone.slice(0, 3)})`}
          </p>
          <p className="telephone--first-half">
            {'\u00A0'}{shippingPhone.slice(3, 4)}{'\u2013'}
          </p>
          <p className="telephone--second-half">
            {'\u00A0'}{shippingPhone.slice(7, 4)}
          </p>
        </div>
      </fieldset>
    </div>
  );
}

const { string } = PropTypes;
OrderHeader.propTypes = {
  givenName: string.isRequired,
  familyName: string.isRequired,
  shippingAddress: string.isRequired,
  shippingCity: string.isRequired,
  shippingPrefecture: string.isRequired,
  shippingPostalCode: string.isRequired,
  shippingCountry: string.isRequired,
  shippingPhone: string.isRequired,
};

export default OrderHeader;
