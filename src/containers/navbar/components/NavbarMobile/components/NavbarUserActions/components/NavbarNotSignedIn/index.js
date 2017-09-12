import React from 'react';
import { Link } from 'react-router';

export default function NavbarMobileUserActionsNotSignedIn() {
  return (
    <ul className="actions__notSignedIn--list">
      <li className="list--login sweep-right-red">
        <Link to={'/login'} className="login__link">
          Login
        </Link>
      </li>
    </ul>
  );
}
