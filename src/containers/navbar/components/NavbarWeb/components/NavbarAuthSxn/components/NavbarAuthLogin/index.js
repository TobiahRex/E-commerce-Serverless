import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarAuthLogin() {
  return (
    <div className="right-side__logged-section" data-ix="nav-b-logged-section-load">
      <Link className="logged-section__login-prompt" to="/login">
        <div className="logged-section__login-prompt">
          <p className="login-prompt__nav-s-login">
            <IntlMsg id="navbar.login.title" />
          </p>
        </div>
      </Link>
    </div>
  );
}
export default NavbarAuthLogin;
