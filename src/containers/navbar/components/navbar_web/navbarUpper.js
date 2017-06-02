import React from 'react';
import NavbarLanguage from './navbar_web_language/';
import NavbarUserActions from './navbar_web_userActions/';
import NavbarCart from './navbar_web_cart/container/';

export default function NavbarUpper() {
  return (
    <div className="navbar-actionSection-upper">
      <div className="navbar-actionSection-upper-options">
        <NavbarLanguage />
      </div>
      
      <NavbarUserActions />

      <div className="navbar actionSection upper mycart-container">
        <NavbarCart />
      </div>
    </div>
  );
}
