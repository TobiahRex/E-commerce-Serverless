import React from 'react';
import {
  NavbarCart,
  NavbarLanguage,
  NavbarUserActions,
} from '../';

export default function NavbarUpper() {
  return (
    <div className="navbar-actionSection-upper">
      <NavbarLanguage />
      <NavbarUserActions />
      <NavbarCart />
    </div>
  );
}
