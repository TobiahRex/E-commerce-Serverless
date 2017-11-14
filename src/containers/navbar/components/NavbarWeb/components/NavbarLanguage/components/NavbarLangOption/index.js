import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarLangBtn({ onChange, language }) {
  return (
    <button
      data-language={language}
      className="left-side__alt-language w-inline-block"
      onClick={onChange}
      data-w-id="e9f32610-a155-548f-827d-226f00b30fd4"
    >
      <div className="alt-language__language-container" data-w-id="c7a6150e-3c9f-7c03-49b3-e0ecf90cb46b">
        <div className="language-container__img-container">
          <img
            alt={language}
            className="img-container__navbar-language-img"
            src={`/images/${language}-flag.png`}
          />
        </div>
        <div className="language-container__blurb-container">
          <p className="blurb-container__alt-nav-language" data-w-id="036eb129-a653-57f8-fd66-62821743c287" >
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
