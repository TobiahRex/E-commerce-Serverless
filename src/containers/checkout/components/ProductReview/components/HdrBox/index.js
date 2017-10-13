import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function HdrBox() {
  return (
    <div className="product-review__hdr-section">
      <div className="hdr-section__hdr-box">
        <h2 className="hdr-box__hdr-blurb">
          <IntlMsg id="checkout.product-review.title" />
        </h2>
      </div>
    </div>
  );
}
