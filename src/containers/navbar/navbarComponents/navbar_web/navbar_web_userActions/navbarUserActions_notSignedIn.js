import React from 'react';
import { Link } from 'react-router';

function NavbarUserActionsNotSignedIn() {
  return (
    <ul className="navbar-actionSection-upper-actions-notSignedIn" >
      <li className="sign-in-title">
        <Link
          to="/login"
          className="navbar-userActions-sign-in-title-link"
        >Login</Link>
      </li>
      <li className="register-title">
        <Link
          to="/register"
          className="navbar-userActions-register-title-link"
        >Register</Link>
      </li>
    </ul>
  );
}
export default NavbarUserActionsNotSignedIn;
