import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarNavs,
  NavbarLogoSxn,
  NavbarLanguage,
  NavbarAuthSxn,
  NavbarMyCart,
} from './components';

function NavbarMain({ qty, handleLangChange, activeLanguage }) {
  return (
    <div className="navbar-big__nav-section">
      <div className="nav-section__navbar-content">
        <NavbarLogoSxn />
        <div className="navbar-content__action-section">
          <div className="action-section__navbar-action-top">
            <NavbarLanguage
              handleLangChange={handleLangChange}
              activeLanguage={activeLanguage}
            />
            <div className="navbar-action-top__right-side">
              <NavbarAuthSxn />
              <NavbarMyCart qty={qty} />
            </div>
          </div>
          <NavbarNavs />
        </div>
      </div>
    </div>
  );
}
const { number, string, func } = PropTypes;
NavbarMain.propTypes = {
  qty: number.isRequired,
  activeLanguage: string.isRequired,
  handleLangChange: func.isRequired,
};
export default NavbarMain;
