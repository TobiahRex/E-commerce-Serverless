import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarAuthLogin() {
  return (
    <Link className="logged-section__login-prompt" to="/login">
      <div className="logged-section__login-prompt">
        <p className="login-prompt__nav-s-login">
          <IntlMsg id="navbar.login.title" />
        </p>
      </div>
    </Link>
  );
}
export default NavbarAuthLogin;
