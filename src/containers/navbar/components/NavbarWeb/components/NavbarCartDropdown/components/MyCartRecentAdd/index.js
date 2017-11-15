import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function NavbarRecentAdd() {
  return (
    <div className="floating-cart-container__recently-added">
      <p className="recently-added__blurb-text">
        <IntlMsg id="navbar.cart.recently-added" />
      </p>
    </div>
  );
}
