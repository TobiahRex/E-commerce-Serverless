import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarLangBtn,
  NavbarLangOption,
} from './components';

function NavbarLanguage({ handleLangChange, activeLanguage }) {
  return (
    <div className="nav-action-top__left-side">

      {
        activeLanguage === 'en' ?
          <NavbarLangBtn activeLanguage="english" /> :
          <NavbarLangBtn activeLanguage="japanese" />
      }

      {
        activeLanguage === 'en' ?
          <NavbarLangOption
            onChange={handleLangChange}
            language="japanese"
          /> :
          <NavbarLangOption
            onChange={handleLangChange}
            language="english"
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
