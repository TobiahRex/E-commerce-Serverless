import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarLangBtn,
  NavbarLangOption,
} from './components';

function NavbarLanguage({ handleLangChange, activeLanguage, renderKey }) {
  return (
    <div
      key={renderKey}
      className="nav-action-top__left-side"
      data-w-id="f0db6205-47f1-21c7-784b-18b8d37a443f"
    >
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
const { string, func, number } = PropTypes;
NavbarLanguage.propTypes = {
  renderKey: number.isRequired,
  handleLangChange: func.isRequired,
  activeLanguage: string.isRequired,
};
export default NavbarLanguage;
