import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';

class NavbarUserActions extends PureComponent {
  signOut = () => console.info('user has signed out.');

  render() {
    return (
      <div className="navbar actionSection upper user-action">
        <ul className="navbar actionSection upper user-action not-signed-in">
          <li className="sign-in-title">
            <Link>Sign In</Link>
          </li>
          <li className="register-title">
            <Link>Register</Link>
          </li>
        </ul>
        <ul className="hidden navbar actionSection upper user-action signed-in">
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
      </div>
    );
  }
}
export default NavbarUserActions;
