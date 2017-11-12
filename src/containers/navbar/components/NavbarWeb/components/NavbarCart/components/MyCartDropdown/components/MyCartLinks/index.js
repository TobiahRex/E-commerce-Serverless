/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function MyCartLinks() {
  return (
    <div className="floating-cart-container__btn-section sweep-right">
      <Link className="btn-section__checkout-btn w-button" to="/cart">
        <IntlMsg id="navbar.cart.link.view-cart" />
      </Link>
      <Link className={`btn-section__view-cart-btn w-button sweep-right ${IntLocale}`} to="/express_checkout">
        <IntlMsg id="navbar.cart.link.checkout" />
      </Link>
    </div>
  );
}
