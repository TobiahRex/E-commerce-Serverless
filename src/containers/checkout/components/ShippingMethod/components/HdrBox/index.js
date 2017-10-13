import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

export default function HdrBox() {
  return (
    <div className="shipping-method__hdr-section">
      <div className="hdr-section__hdr-box">
        <h2 className="hdr-box__hdr-blurb">
          <IntlMsg id="checkout.shipping-method.title" />
        </h2>
      </div>
    </div>
  );
}
