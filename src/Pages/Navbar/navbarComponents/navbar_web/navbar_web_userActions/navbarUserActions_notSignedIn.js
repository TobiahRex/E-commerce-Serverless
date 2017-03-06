import React, { PureComponent } from 'react';
import { Link, browserHistory } from 'react-router';

/* TODO
1. Configure react-router for "/sign_in" * "/register"

*/

class NavbarUserActionsNotSignedIn extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <ul
        style={NavbarUserActionsNotSignedIn.styles.hidden}
        className="navbar-actionSection-upper-actions-notSignedIn"
      >
        <li className="sign-in-title sweep-right" onClick={() => browserHistory.push('/login')}>
          <Link
            to={'/login'}
            className="navbar-userActions-sign-in-title-link"
          >Login</Link>
        </li>
        <li className="register-title sweep-right" onClick={() => browserHistory.push('/register')}>
          <Link
            to={'/register'}
            className="navbar-userActions-register-title-link"
          >Register</Link>
        </li>
      </ul>
    );
  }
}

export default NavbarUserActionsNotSignedIn;
