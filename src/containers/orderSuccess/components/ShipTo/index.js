import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ShipTo({
  fullName,
  jpAddress1,
  jpAddress2,
  city,
  prefecture,
  postalCode,
  country,
  phoneNumber,
}) {
  return (
    <div className="addresses--shipto">
      <fieldset className="shipto--fieldset">
        <legend className="shipto__legend">
          <p>
            <IntlMsg id="checkout.success.ship-to" />
          </p>
        </legend>
        <div className="shipto__name">
          <p className="name--firstName">{fullName.split(' ')[0]}</p>
          <p className="name--lastName">{'\u00A0'}{fullName.split(' ')[1]}</p>
        </div>
        <div className="shipto__address">
          <p>{jpAddress1}</p>
          <p>{jpAddress2}</p>
        </div>
        <div className="shipto__city-prefecture">
          <p className="city-prefecture--city">{city}</p>
          {'\u00A0'}
          {'\u00A0'}
          <p className="city-prefecture--prefecture">{prefecture}</p>
        </div>
        <div className="shipto__country">
          <p>{country}</p>
        </div>
        <div className="shipto__postal-code">
          <p>{postalCode}</p>
        </div>
        <div className="shipto__telephone">
          <p className="telephone--area-code">
            {`(${phoneNumber.slice(0, 3)})`}
          </p>
          <p className="telephone--first-half">
            {'\u00A0'}{phoneNumber.slice(3, 7)}{'\u2013'}
          </p>
          <p className="telephone--second-half">
            {'\u00A0'}{phoneNumber.slice(7, 12)}
          </p>
        </div>
      </fieldset>
    </div>
  );
}

const { string } = PropTypes;
ShipTo.propTypes = {
  fullName: string.isRequired,
  jpAddress1: string.isRequired,
  jpAddress2: string.isRequired,
  city: string.isRequired,
  prefecture: string.isRequired,
  postalCode: string.isRequired,
  country: string.isRequired,
  phoneNumber: string.isRequired,
};

export default ShipTo;
