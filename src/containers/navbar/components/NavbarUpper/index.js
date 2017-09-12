import React from 'react';
import {
  NavbarWebCart,
  NavbarWebLanguage,
  NavbarWebUserActions,
} from '../';

export default function NavbarUpper() {
  return (
    <div className="navbar-actionSection-upper">
      <NavbarWebLanguage />
      <NavbarWebUserActions />
      <NavbarWebCart />
    </div>
  );
}
