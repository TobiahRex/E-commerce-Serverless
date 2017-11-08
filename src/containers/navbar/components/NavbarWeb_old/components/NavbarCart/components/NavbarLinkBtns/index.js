/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function NavbarLinkBtns() {
  return (
    <div className="action-links">
      <Link to="/cart" className="action-links-cart sweep-right">
        <IntlMsg id="navbar.cart.link.view-cart" />
      </Link>
      <Link to="/express_checkout" className={`action-links-checkout sweep-right ${IntlLocale}`}>
        <IntlMsg id="navbar.cart.link.checkout" />
      </Link>
    </div>
  );
}
