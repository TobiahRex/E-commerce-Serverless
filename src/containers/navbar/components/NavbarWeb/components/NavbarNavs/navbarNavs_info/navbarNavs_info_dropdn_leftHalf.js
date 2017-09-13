import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function NavbarNavsInfoDropdnLefthalf() {
  return (
    <div className="info-dropdown-content-innerContainer-left">
      <ul
        className="info-dropdown-content-innerContainer-left-list"
      >
        <li className="sweep-right">
          <Link to={'/about'}>
            <p>
              <IntlMsg id="navbar.nav.info.links.about" />
            </p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/faqs'}>
            <p>
              <IntlMsg id="navbar.nav.info.links.faqs" />
            </p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/contact_us'}>
            <p>
              <IntlMsg id="navbar.nav.info.links.contact-us" />
            </p>
          </Link>
        </li>
        {/* <li className="sweep-right">
          <Link to={'/wholesale'}>
            <p>Wholesale</p>
          </Link>
          </li>
          <li className="sweep-right">
          <Link to={'/mission_statement'}>
            <p>Mission Statement</p>
          </Link>
          </li>
          <li className="sweep-right">
          <Link to={'/affiliate_program'}>
            <p>Affiliate Program</p>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
