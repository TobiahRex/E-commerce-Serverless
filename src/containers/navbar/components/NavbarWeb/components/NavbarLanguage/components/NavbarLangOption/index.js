import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarLangBtn({ onChange, language }) {
  return (
    <button
      data-language={language}
      className="left-side__alt-language w-inline-block"
      onClick={onChange}
    >
      <div className="alt-language__language-container">
        <div className="language-container__img-container">
          <img
            alt={language}
            className="img-container__navbar-language-img"
            src={`/images/${language}-flag.png`}
          />
        </div>
        <div className="language-container__blurb-container">
          <p className="blurb-container__alt-nav-language">
            <IntlMsg id={`navbar.language.${language}.title`} />
          </p>
        </div>
      </div>
    </button>
  );
}
NavbarLangBtn.propTypes = {
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
export default NavbarLangBtn;
