import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function MyCartDdPrmxn() {
  return (
    <div className="floating-cart-container__loading-stage">
      <div className="loading-stage__loading-blurb">
        <p className="loading-blurb__nav-cart-blurb">
          <IntlMsg id="navbar.cart.loading" />
          &nbsp;
          <em className="nav-cart-blurb__fa-spinner">
            <FontAwesome name="spinner" pulse />
          </em>
        </p>
      </div>
    </div>
  );
}
