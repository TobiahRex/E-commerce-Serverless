import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function BillTo({
  nameOnCard,
  billingPostalCode,
  billingCountry,
  ccLastFour,
  cardBrand,
}) {
  return (
    <div className="addresses--billto">
      <fieldset className="billto--fieldset">
        <legend className="billto__legend">
          <p>
            <IntlMsg id="checkout.success.bill-to" />
          </p>
        </legend>
        <div className="billto__name">
          <p className="name--firstName">{nameOnCard.split(' ')[0]}</p>
          <p className="name--lastName">{'\u00A0'}{nameOnCard.split(' ')[1]}</p>
        </div>
        <div className="billto__postal-code">
          <p>{billingPostalCode}</p>
        </div>
        <div className="billto__country">
          <p>{billingCountry === 'JP' ? '日本' : 'United States'}</p>
        </div>
        <div className="billto__card-info">
          <p>
            <IntlMsg id="checkout.success.bill-to.cc" />
            {ccLastFour}
          </p>
        </div>
        <div className="billto__card-info">
          <p>
            <IntlMsg id="checkout.success.bill-to.cc-brand" />
            {cardBrand}
          </p>
        </div>
      </fieldset>
    </div>
  );
}

const { string } = PropTypes;
BillTo.propTypes = {
  nameOnCard: string.isRequired,
  billingPostalCode: string.isRequired,
  billingCountry: string.isRequired,
  ccLastFour: string.isRequired,
  cardBrand: string.isRequired,
};

export default BillTo;
