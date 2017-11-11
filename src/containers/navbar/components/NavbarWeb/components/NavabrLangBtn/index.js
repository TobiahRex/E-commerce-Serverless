import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarLangBtn({ activeLanguage }) {
  const language = activeLanguage.toLowerCase();

  return (
    <div className="left-side__language-switcher w-inline-block" to="#">
      <div>
        <div className="language-switcher__img-container">
          <img
            alt={language}
            className="img-container__navbar-language-img"
            src={`/images/${language}-flag.png`}
          />
        </div>
        <div className="language-switcher__blurb-container">
          <p className="blurb-container__navbar-language-blurb">
            <IntlMsg id={`navbar.language.${language}`} />
          </p>
        </div>
      </div>
      <div className="language-switcher__arrow-container">
        <p className="arrow-container__nav-language-arrow" data-ix="nav-b-language-arrow-bounce">
          <FontAwesome name="angle-down" />
        </p>
      </div>
    </div>
  );
}
NavbarLangBtn.propTypes = {
  activeLanguage: PropTypes.string.isRequired,
};
export default NavbarLangBtn;
