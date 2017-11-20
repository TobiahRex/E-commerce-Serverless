import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function MediaTop({ reRenderNavbar }) {
  return (
    <div className="floating-media-container__top-section">
      <Link
        to="/contact_us"
        data-w-id="8526c16d-72a5-cf15-8b4c-d1e37d5fb252"
        className="top-section__media-hdr w-inline-block"
        onClick={reRenderNavbar}
      >
        <h3 className="media-hdr__section-text section-text--contact-us">
          <IntlMsg id="navbar.nav.contact-us.title" />
        </h3>
      </Link>

      <Link
        to="/reviews"
        data-w-id="1760c8e6-f29b-e27e-9997-9cc3596f7755"
        className="top-section__media-hdr w-inline-block"
        onClick={reRenderNavbar}
      >
        <h3 className="media-hdr__section-text section-text--juice-reviews">
          <IntlMsg id="navbar.nav.juice-reviews.title" />
        </h3>
      </Link>

      <div
        className="top-section__media-hdr"
        data-ix="nav-s-media-review-hdr-hover-2"
        data-w-id="92907191-e543-67e4-93de-1c7b8c06b2f4"
      >
        <Link
          to="/vape_news"
          className="top-section__media-hdr w-inline-block"
          data-w-id="aad86a7e-3f36-1984-6801-e3081f250cf0"
          onClick={reRenderNavbar}
        >
          <h3 className="media-hdr__section-text section-text--vape-news">
            <IntlMsg id="navbar.nav.vape-news.title" />
          </h3>
        </Link>
      </div>
      <Link
        to="/user_stories"
        data-w-id="2d03065a-6035-f88d-4b3f-9f56c61072ca"
        className="top-section__media-hdr w-inline-block"
        onClick={reRenderNavbar}
      >
        <h3 className="media-hdr__section-text section-text--usr-stories">
          <IntlMsg id="navbar.nav.user-stories.title" />
        </h3>
      </Link>
    </div>
  );
}
MediaTop.propTypes = {
  reRenderNavbar: PropTypes.func.isRequired,
};
export default MediaTop;
