import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

export default function HdrBox() {
  return (
    <div className="grand-total__hdr-section">
      <div className="hdr-section__hdr-box">
        <h2 className="hdr-box__hdr-blurb">
          <IntlMsg id="checkout.credit-card.title" />
        </h2>
      </div>
    </div>
  );
}
