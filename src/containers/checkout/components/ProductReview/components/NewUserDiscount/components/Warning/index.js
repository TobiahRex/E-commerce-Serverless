import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function Warning() {
  return (
    <div className="logged-out__warning">
      <p className="warning__blurb">
        <strong className="blurb__red-text">
          <IntlMsg id="checkout.product-review.new-user.discount.warning.title" />&nbsp;&nbsp;
        </strong>
        <IntlMsg id="checkout.product-review.new-user.discount.warning.description" />&nbsp;
        <strong className="blurb__red-text">*</strong>&nbsp;
      </p>
    </div>
  );
}
