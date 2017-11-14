import React from 'react';
import { Link } from 'react-router';
import { injectIntl, intlShape } from 'react-intl';

function NavbarLogoSxn({ intl }) {
  return (
    <Link className="navbar-content__logo-container" to="/">
      <img
        alt={intl.messages['navbar.alt.logo']}
        className="logo-container__nav-img-sml"
        sizes="(max-width: 767px) 100vw, (max-width: 991px) 146px, 15vw"
        src="/images/nj2jp_web_friendly.png"
        srcSet="/images/nj2jp_web_friendly-p-500.png 500w, /images/nj2jp_web_friendly-p-800.png 800w, /images/nj2jp_web_friendly-p-1080.png 1080w, /images/nj2jp_web_friendly.png 1509w"
        width="383"
      />
    </Link>
  );
}
const NavbarLogoSxnWithIntl = injectIntl(NavbarLogoSxn);
NavbarLogoSxn.propTypes = {
  intl: intlShape.isRequired,
};
export default NavbarLogoSxnWithIntl;
