import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function InfoRight({ reRenderNavbar }) {
  return (
    <div className="floating-info-container__right-section">
      <div className="right-section__menu-container">
        <Link
          className="menu-container__link-blurb"
          data-ix="new-interaction"
          to="/shipping_policy"
          onClick={reRenderNavbar}
        >
          <IntlMsg id="navbar.nav.info.links.shipping-policy" />
        </Link>
      </div>
      <div className="right-section__menu-container">
        <Link
          className="menu-container__link-blurb"
          to="/return_policy"
          onClick={reRenderNavbar}
        >
          <IntlMsg id="navbar.nav.info.links.return-policy" />
        </Link>
      </div>
      <div className="right-section__menu-container">
        <Link
          className="menu-container__link-blurb"
          to="/privacy_policy"
          onClick={reRenderNavbar}
        >
          <IntlMsg id="navbar.nav.info.links.privacy-policy" />
        </Link>
      </div>
      <div className="right-section__menu-container">
        <Link
          className="menu-container__link-blurb"
          to="/terms_and_conditions"
          onClick={reRenderNavbar}
        >
          <IntlMsg id="navbar.nav.info.links.terms-and-conditions" />
        </Link>
      </div>
      <div className="right-section__menu-container">
        <Link
          className="menu-container__link-blurb"
          to="/nicotine_disclaimer"
          onClick={reRenderNavbar}
        >
          <IntlMsg id="navbar.nav.info.links.nicotine-disclaimer" />
        </Link>
      </div>
    </div>
  );
}
InfoRight.propTypes = {
  reRenderNavbar: PropTypes.func.isRequired,
};
export default InfoRight;
