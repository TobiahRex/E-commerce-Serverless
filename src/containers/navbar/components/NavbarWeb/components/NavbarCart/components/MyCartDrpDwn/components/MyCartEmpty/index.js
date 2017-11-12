import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function MyCartEmpty() {
  return (
    <div className="floating-cart-container__empty-stage">
      <div className="empty-stage__empty-blurb">
        <p className="empty-blurb__nav-cart-blurb">
          <IntlMsg id="navbar.cart.empty" />
        </p>
      </div>
    </div>
  );
}
