import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function NavbarRecentAdd() {
  return (
    <div className="recently-added">
      <IntlMsg id="navbar.cart.recently-added" />
    </div>
  );
}
