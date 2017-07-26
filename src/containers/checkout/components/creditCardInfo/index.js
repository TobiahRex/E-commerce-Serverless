import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import {
  NameOnCard,
  CreditCardNumber,
  CreditCardExpiration,
  CreditCardCvn,
} from './component.imports';

function CreditCardInfo({ showCvnModal, toggleModal }) {
  return (
    <div className="checkout__credit-card">
      <div className="title">
        <h3>Credit Card Information</h3>
      </div>

      <div className="input__row">
        <div className="input__row--cc-type">
          <p>Accepted Credit Card Types</p>
          <div className="types">
            <FontAwesome name="cc-visa" />
            <FontAwesome name="cc-mastercard" />
            <FontAwesome name="cc-discover" />
            <FontAwesome name="cc-amex" />
          </div>
        </div>
      </div>

      <NameOnCard />

      <CreditCardNumber />

      <CreditCardExpiration />

      <CreditCardCvn />
    </div>
  );
}
const { func, bool } = PropTypes;
CreditCardInfo.propTypes = {
  toggleModal: func.isRequired,
  showCvnModal: bool.isRequired,
};

export default CreditCardInfo;
