import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';
import { auth as AuthService } from './assets/utils';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarAuthLogin() {
  return (
    // <div className="logged-section__usr-icon">
    //   <img
    //     alt="Avatar"
    //     className="usr-icon__nav-s-img"
    //     src="/images/default-avatar-150px.png"
    //   />
    // </div>

    <div className="right-side__logged-section" data-ix="nav-b-logged-section-load">
      <button
        onClick={this.logout}
        className="logged-section__login-prompt"
      >
        <div className="logged-section__login-prompt">
          <p className="login-prompt__nav-s-login">
            <IntlMsg id="navbar.login.title" />
          </p>
        </div>
      </button>
      <div className="logged-section__usr-icon">
        <img alt="" className="usr-icon__nav-s-img" src="/images/default-avatar-150px.png" />
      </div>
    </div>
  );
}
const NavbarAuthLoginWithHandlers = withHandlers({
  logout: () => AuthService.logout(),
})(NavbarAuthLogin);


const { any, objectOf } = PropTypes;
NavbarAuthLogin.propTypes = {
  activeUser: objectOf(any),
};
NavbarAuthLogin.defaultProps = {
  activeUser: {
    pictures: {
      small: '',
      default: '/images/default-avatar-150px.png',
    },
  },
};

export default NavbarAuthLoginWithHandlers;
