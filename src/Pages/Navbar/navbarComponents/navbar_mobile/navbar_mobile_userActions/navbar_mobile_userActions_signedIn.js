import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import uuid from 'uuid'; // TODO Remove this once you have user ID's from BE.

class NavbarMobileUserActionsSignedIn extends PureComponent {
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
        // style={NavbarMobileUserActionsSignedIn.styles.hidden}
        className="navbar-mobile-actions-signedIn"
      >
        <li className="navbar-mobile-actions-signedIn-myaccount-title sweep-right">
          <Link
            to={`/user_${uuid()}`}
            className="navbar-mobile-actions-signedIn-myaccount-title-link"
          >My Account</Link>
        </li>
        <li className="navbar-mobile-actions-signedIn-checkout-title sweep-right">
          <Link
            to={'/express_checkout'}
            className="navbar-mobile-actions-signedIn-checkout-title-link"
          >Checkout</Link>
        </li>
        <li className="navbar-mobile-actions-signedIn-signOut-title sweep-right">
          <button
            className="navbar-mobile-actions-signedIn-signOut-title-button"
          >
            Logout
          </button>
        </li>
      </ul>
    );
  }
}

export default NavbarMobileUserActionsSignedIn;
