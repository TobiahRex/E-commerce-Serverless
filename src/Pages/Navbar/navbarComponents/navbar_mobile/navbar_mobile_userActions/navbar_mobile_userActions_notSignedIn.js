import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

/* TODO
1. Configure react-router for "/sign_in" * "/register"

*/

class NavbarMobileUserActionsNotSignedIn extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <ul
        style={NavbarMobileUserActionsNotSignedIn.styles.hidden}
        className="navbar-mobile-actions-notSignedIn"
      >
        <li className="navbar-mobile-actions-notSignedIn-sign-in-title sweep-right">
          <Link
            to={'/login'}
            className="navbar-mobile-actions-notSignedIn-sign-in-title-link"
          >Login</Link>
        </li>
        <li className="navbar-mobile-actions-notSignedIn-register-title sweep-right">
          <Link
            to={'/register'}
            className="navbar-mobile-actions-notSignedIn-register-title-link"
          >Register</Link>
        </li>
      </ul>
    );
  }
}

export default NavbarMobileUserActionsNotSignedIn;
