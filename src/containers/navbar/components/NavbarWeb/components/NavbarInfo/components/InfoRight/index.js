import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function InfoRight() {
  return (
    <div className="floating-info-container__right-section">
      <div className="right-section__menu-container">
        <Link className="menu-container__link-blurb" data-ix="new-interaction" to="/shipping_policy">
          <IntlMsg id="navbar.nav.info.links.shipping-policy" />
        </Link>
      </div>
      <div className="right-section__menu-container">
        <Link className="menu-container__link-blurb" to="/return_policy">
          <IntlMsg id="navbar.nav.info.links.return-policy" />
        </Link>
      </div>
      <div className="right-section__menu-container">
        <Link className="menu-container__link-blurb" to="/privacy_policy">
          <IntlMsg id="navbar.nav.info.links.privacy-policy" />
        </Link>
      </div>
      <div className="right-section__menu-container">
        <Link className="menu-container__link-blurb" to="/terms_and_conditions">
          <IntlMsg id="navbar.nav.info.links.terms-and-conditions" />
        </Link>
      </div>
      <div className="right-section__menu-container">
        <Link className="menu-container__link-blurb" to="/nicotine_disclaimer">
          <IntlMsg id="navbar.nav.info.links.nicotine-disclaimer" />
        </Link>
      </div>
    </div>
  );
}
