import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarAuthSxn() {
  return (
    <div className="right-side__logged-section" data-ix="nav-b-logged-section-load">
      <Link className="logged-section__login-prompt" to="/login">
        <div className="logged-section__login-prompt">
          <p className="login-prompt__nav-s-login">
            <IntlMsg id="navbar.login.title" />
          </p>
        </div>
      </Link>
      <div className="logged-section__usr-icon">
        <img alt="" className="usr-icon__nav-s-img" src="/images/default-avatar-150px.png" />
      </div>
    </div>
  );
}
NavbarAuthSxn.propTypes = {
  link: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  ix: PropTypes.string.isRequired,
};
export default NavbarAuthSxn;
