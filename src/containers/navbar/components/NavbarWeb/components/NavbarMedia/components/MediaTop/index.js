import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function MediaTop() {
  return (
    <div className="floating-media-container__top-section">
      <Link className="top-section__media-hdr w-inline-block" to="/contact_us">
        <h3 className="media-hdr__section-text section-text--contact-us">
          <IntlMsg id="navbar.nav.contact-us.title" />
        </h3>
      </Link>
      <Link className="top-section__media-hdr w-inline-block" to="/reviews">
        <h3 className="media-hdr__section-text section-text--juice-reviews">
          <IntlMsg id="navbar.nav.juice-reviews.title" />
        </h3>
      </Link>
      <div className="top-section__media-hdr" data-ix="nav-s-media-review-hdr-hover-2">
        <Link className="top-section__media-hdr w-inline-block" to="/vape_news">
          <h3 className="media-hdr__section-text section-text--vape-news">
            <IntlMsg id="navbar.nav.vape-news.title" />
          </h3>
        </Link>
      </div>
      <Link className="top-section__media-hdr w-inline-block" to="/user_stories">
        <h3 className="media-hdr__section-text section-text--usr-stories">
          <IntlMsg id="navbar.nav.user-stories.title" />
        </h3>
      </Link>
    </div>
  );
}
