import React from 'react';
import PropTypes from 'prop-types';

function BillTo({
  nameOnCard,
  billingPostalCode,
  billingCountry,
  ccLastFour,
}) {
  return (
    <div className="addresses--billto">
      <fieldset className="billto--fieldset">
        <legend className="billto__legend">
          <p>Bill To</p>
        </legend>
        <div className="billto__name">
          <p className="name--firstName">{nameOnCard.split(' ')[0]}</p>
          <p className="name--lastName">{'\u00A0'}{nameOnCard.split(' ')[1]}</p>
        </div>
        <div className="billto__postal-code">
          <p>{billingPostalCode}</p>
        </div>
        <div className="billto__country">
          <p>{billingCountry === 'JP' ? 'Japan' : 'United States'}</p>
        </div>
        <div className="billto__card-info">
          <p>Credit Card #: ************{ccLastFour}</p>
        </div>
      </fieldset>
    </div>
  );
}

const { string, number } = PropTypes;
BillTo.propTypes = {
  nameOnCard: string.isRequired,
  billingPostalCode: string.isRequired,
  billingCountry: string.isRequired,
  ccLastFour: number.isRequired,
};

export default BillTo;
