import React from 'react';
import { Link } from 'react-router';

function NavbarUserActionsNotSignedIn() {
  return (
    <ul className="upper-actions__notSignedIn" >
      <li className="notSignedIn__sign-in--title">
        <Link to="/login" className="sign-in__link">
          Login
        </Link>
      </li>
      {/* TODO: MVP 2
         <li className="notSignedIn__register--title">
        <Link to="/register" className="register__link">
          Register
        </Link>
      </li> */}
    </ul>
  );
}
export default NavbarUserActionsNotSignedIn;
