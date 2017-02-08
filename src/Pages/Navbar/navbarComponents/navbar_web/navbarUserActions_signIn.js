import React, { PureComponent } from 'react';
import { Link } from 'react-router';

class NavbarUserActionsSignin extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  signOut = () => console.info('user has signed out.');

  render() {
    return (
      <ul
        className="navbar actionSection upper user-actions signed-in"
      >
        <li className="my-account-title">
          <Link>My Account</Link>
        </li>
        <li className="checkout-title">
          <Link>Checkout</Link>
        </li>
        <li className="sign-out-title">
          <span>Sign Out</span>
        </li>
      </ul>

    );
  }
}

export default NavbarUserActionsSignin;
