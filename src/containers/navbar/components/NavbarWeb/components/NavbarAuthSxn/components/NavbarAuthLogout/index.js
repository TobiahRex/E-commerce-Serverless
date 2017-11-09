import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { withHandlers } from 'recompose';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { auth as AuthService } from './assets/utils';

function NavbarAuthLogout({ logout }) {
  return (
    <div className="right-side__logged-section" data-ix="nav-b-logged-section-load">
      <button
        onClick={logout}
        className="logged-section__login-prompt"
      >
        <div className="logged-section__login-prompt">
          <p className="login-prompt__nav-s-login">
            <IntlMsg id="navbar.logout.title" />
          </p>
        </div>
      </button>
      <Link
        to="/express_checkout"
        className="logged-section__login-prompt"
      >
        <div className="logged-section__login-prompt">
          <p className="login-prompt__nav-s-login">
            <IntlMsg id="navbar.checkout.title" />
          </p>
        </div>
      </Link>
      <div className="logged-section__usr-icon">
        <img
          alt={this.props.activeUser.profile.givenName}
          className="usr-icon__nav-s-img"
          src={
            this.props.activeUser.pictures.small ||
            this.props.activeUser.pictures.default
          }
        />
      </div>
    </div>
  );
}
const NavbarAuthLogoutWithHandlers = withHandlers({
  logout: () => AuthService.logout(),
})(NavbarAuthLogout);


const { any, objectOf, func } = PropTypes;
NavbarAuthLogout.propTypes = {
  activeUser: objectOf(any),
  logout: func.isRequired,
};
NavbarAuthLogout.defaultProps = {
  activeUser: {
    pictures: {
      small: '',
      default: '/images/default-avatar-150px.png',
    },
  },
};

export default NavbarAuthLogoutWithHandlers;
