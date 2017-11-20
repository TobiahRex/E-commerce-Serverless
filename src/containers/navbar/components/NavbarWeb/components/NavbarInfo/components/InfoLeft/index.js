import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function InfoLeft({ reRenderNavbar }) {
  return (
    <div className="floating-info-container__left-section">
      <div className="left-section__menu-container">
        <Link
          className="menu-container__link-blurb"
          to="/about"
          onClick={reRenderNavbar}
        >
          <IntlMsg id="navbar.nav.info.links.about" />
        </Link>
        <Link
          className="menu-container__link-blurb"
          to="/faqs"
          onCLick={reRenderNavbar}
        >
          <IntlMsg id="navbar.nav.info.links.faqs" />
        </Link>
        <Link
          className="menu-container__link-blurb"
          to="/contact_us"
          onClick={reRenderNavbar}
        >
          <IntlMsg id="navbar.nav.info.links.contact-us" />
        </Link>
      </div>
    </div>
  );
}
InfoLeft.propTypes = {
  reRenderNavbar: PropTypes.func.isRequired,
};
export default InfoLeft;
