import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function InfoLeft() {
  return (
    <div className="floating-info-container__left-section">
      <div className="left-section__menu-container">
        <Link className="menu-container__link-blurb" to="/about">
          <IntlMsg id="navbar.nav.info.links.about" />
        </Link>
        <Link className="menu-container__link-blurb" to="/faqs">
          <IntlMsg id="navbar.nav.info.links.faqs" />
        </Link>
        <Link className="menu-container__link-blurb" to="/contact_us">
          <IntlMsg id="navbar.nav.info.links.contact-us" />
        </Link>
      </div>
    </div>
  );
}
