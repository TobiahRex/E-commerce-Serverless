import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function Disclaimer() {
  return (
    <div className="logged-out__disclaimer">
      <div className="disclaimer__blurb">
        <em className="blurb__red-text--alt">*</em>&nbsp;
        <IntlMsg id="checkout.product-review.new-user.discount.credit-card" />
      </div>
    </div>
  );
}
