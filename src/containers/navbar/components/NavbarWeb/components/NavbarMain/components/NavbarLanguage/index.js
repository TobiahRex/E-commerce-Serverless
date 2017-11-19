import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarLangBtn,
  NavbarLangOption,
} from './components';

function NavbarLanguage({ handleLangChange, activeLanguage }) {
  return (
    <div className="nav-action-top__left-side" data-w-id="f0db6205-47f1-21c7-784b-18b8d37a443f">
      {
        activeLanguage === 'en' ?
          <NavbarLangBtn activeLanguage="en" /> :
          <NavbarLangBtn activeLanguage="ja" />
      }

      {
        activeLanguage === 'en' ?
          <NavbarLangOption
            onChange={handleLangChange}
            language="ja"
          /> :
          <NavbarLangOption
            onChange={handleLangChange}
            language="en"
          />

      }
    </div>
  );
}
NavbarLanguage.propTypes = {
  handleLangChange: PropTypes.func.isRequired,
  activeLanguage: PropTypes.string.isRequired,
};
export default NavbarLanguage;
