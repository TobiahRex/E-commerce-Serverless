import React, { PureComponent } from 'react';
import { Link } from 'react-router';

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
      <ul className="actions__notSignedIn--list">
        <li className="list--login sweep-right-red">
          <Link
            to={'/login'}
            className="login__link"
          >Login</Link>
        </li>
        {/* <li className="list--register sweep-right-red">
          <Link
            to={'/register'}
            className="register__link"
          >Register</Link>
        </li> */}
      </ul>
    );
  }
}

export default NavbarMobileUserActionsNotSignedIn;
