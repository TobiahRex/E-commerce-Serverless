import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';

/* TODO :
1. This component needs a "signed-in" prop from it's parent.  It will be used to toggle the inline-style for display: none.

2. Need to add the respective Navigation COmponent maps for the Links.
*/
class NavbarUserActions extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  signOut = () => console.info('user has signed out.');

  render() {
    return (
      <div className="navbar actionSection upper user-actions">
        <ul className="navbar actionSection upper user-actions not-signed-in hidden">
          <li className="sign-in-title">
            <Link>Sign In</Link>
          </li>
          <li className="register-title">
            <Link>Register</Link>
          </li>
        </ul>
        <ul
          style={NavbarUserActions.styles.hidden}
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
      </div>
    );
  }
}
export default NavbarUserActions;
