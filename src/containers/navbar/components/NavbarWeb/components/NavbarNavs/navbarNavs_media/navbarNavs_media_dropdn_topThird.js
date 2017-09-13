import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarNavsMediaDropdnMidthird() {
  return (
    <div className="media-dropdown-content-midThird">
      <Link
        to={'/contact_us'} className="media-dropdown-content-midThird-links"
      >
        <div className="media-dropdown-content-midThird-title sweep-right">
          <h4>
            <IntlMsg id="navbar.nav.contact-us.title" />
          </h4>
        </div>
      </Link>
      <Link
        to={'/reviews'}
        className="media-dropdown-content-midThird-links"
      >
        <div className="media-dropdown-content-midThird-title sweep-right">
          <h4>
            <IntlMsg id="navbar.nav.juice-reviews.title" />
          </h4>
        </div>
      </Link>
      <Link
        to={'/vape_news'}
        className="media-dropdown-content-midThird-links"
      >
        <div className="media-dropdown-content-midThird-title sweep-right">
          <h4>
            <IntlMsg id="navbar.nav.vape-news.title" />
          </h4>
        </div>
      </Link>
      <Link
        to={'/stories'}
        className="media-dropdown-content-midThird-links"
      >
        <div className="media-dropdown-content-midThird-title sweep-right">
          <h4>
            <IntlMsg id="navbar.nav.user-stories.title" />
          </h4>
        </div>
      </Link>
    </div>
  );
}
export default NavbarNavsMediaDropdnMidthird;
