import React, { PureComponent } from 'react';
import { Link } from 'react-router';

/* TODO
1. Configure react-router for "/sign_in" * "/register"

*/

class NavbarUserActionsNoSignin extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <ul
        style={NavbarUserActionsNoSignin.styles.hidden}
        className="navbar-actionSection-upper-actions-notSignedIn hidden"
      >
        <li className="sign-in-title sweep-right">
          <Link
            to={'/sign_in'}
            className="sign-in-title-link"
          >Sign In</Link>
        </li>
        <li className="register-title sweep-right">
          <Link
            to={'/register'}
            className="register-title-link"
          >Register</Link>
        </li>
      </ul>
    );
  }
}

export default NavbarUserActionsNoSignin;
