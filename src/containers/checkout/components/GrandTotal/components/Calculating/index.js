import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

export default function Calculating() {
  return (
    <div className="total__calculating-total">
      <div className="calculating-total__spinner-container">
        <div className="spinner-container__fa-spinner">
          <IntlMsg id="checkout.total.calculating-total" />&nbsp;
        </div>
      </div>
      <div className="calculating-total__blurb-container">
        <div className="blurb-container__blurb">
          <FontAwesome name="spinner" pulse size="2x" />
        </div>
      </div>
    </div>
  );
}
