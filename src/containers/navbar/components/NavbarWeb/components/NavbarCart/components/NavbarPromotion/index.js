import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function NavbarPromotion() {
  return (
    <div className="promotion">
      <span className="promotion-top-line">
        <IntlMsg id="navbar.cart.promomtion.line1" />
      </span>
      <span className="promotion-bottom-line">
        <IntlMsg id="navbar.cart.promotion.line2" />
      </span>
    </div>
  );
}
