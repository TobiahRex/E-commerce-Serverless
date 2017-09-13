import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function NavbarNavsInfoDropdnRighthalf() {
  return (
    <div className="info-dropdown-content-innerContainer-right">
      <ul
        className="info-dropdown-content-innerContainer-right-list"
      >
        <li className="sweep-right">
          <Link to={'/shipping_policy'}>
            <p>
              <IntlMsg id="navbar.nav.info.links.shipping-policy" />
            </p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/return_policy'}>
            <p>
              <IntlMsg id="navbar.nav.info.links.return-policy" />
            </p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/privacy_policy'}>
            <p>
              <IntlMsg id="navbar.nav.info.links.privacy-policy" />
            </p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/terms_and_conditions'}>
            <p>
              <IntlMsg id="navbar.nav.info.links.terms-and-conditions" />
            </p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/nicotine_disclaimer'}>
            <p>
              <IntlMsg id="navbar.nav.info.nicotine-disclaimer" />
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
