import React, { PureComponent } from 'react';
import { Link } from 'react-router';

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
        <li className="sign-in-title">
          <Link>Sign In</Link>
        </li>
        <li className="register-title">
          <Link>Register</Link>
        </li>
      </ul>
    );
  }
}

export default NavbarUserActionsNoSignin;
