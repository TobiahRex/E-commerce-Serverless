import React, { PureComponent } from 'react';
import { Link, browserHistory } from 'react-router';
import uuid from 'uuid'; // TODO Remove this once you have user ID's from BE.

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
        // style={NavbarUserActionsSignin.styles.hidden}
        className="navbar-actionSection-upper-actions-signedIn"
      >
        <li className="my-account-title sweep-right" onClick={() => browserHistory.push(`/user/${uuid()}`)}>
          <Link to={`/user/${uuid()}`} className="navbar-userActions-myaccount-title-link">
            My Account
          </Link>
        </li>
        <li className="checkout-title sweep-right" onClick={() => browserHistory.push('/express_checkout')}>
          <Link to={'/express_checkout'} className="navbar-userActions-checkout-title-link">
            Checkout
          </Link>
        </li>
        <li className="sign-out-title sweep-right">
          <a
            className="navbar-userActions-signOut-title-button"
            onClick={(e) => {
              e.preventDefault();
              console.warn('Sing out user!!!');
            }}
          >Logout</a>
        </li>
      </ul>

    );
  }
}

export default NavbarUserActionsSignin;
