import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function MyCartDdPrmxn() {
  return (
    <Link
      className="floating-cart-container__promotion-box w-inline-block"
      to="/login"
    >
      <p className="promotion-box__promotion-blurb">
        <IntlMsg id="navbar.cart.promotion.line1" />
      </p>
      <p className="promotion-box__promotion-blurb">
        <IntlMsg id="navbar.cart.promotion.line2" />
      </p>
    </Link>
  );
}
