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
        <li className="sign-out-title sweep-right-red">
          <a
            className="navbar-userActions-signOut-title-button"
            onClick={(e) => {
              e.preventDefault();
              console.warn('Sing out user!!!');
            }}
          >Logout</a>
        </li>
        <li className="checkout-title sweep-right-red" onClick={() => browserHistory.push('/express_checkout')}>
          <Link to={'/express_checkout'} className="navbar-userActions-checkout-title-link">
            Checkout
          </Link>
        </li>
        <li className="my-account-title" onClick={() => browserHistory.push(`/user_${uuid()}`)}>
          <Link to={`/user_${uuid()}`} className="navbar-userActions-myaccount-title-link">
            <img src="../Images/mock_profile-pic.png" alt="My Account" className="signedIn--profile-pic" />
          </Link>
        </li>
      </ul>

    );
  }
}

export default NavbarUserActionsSignin;
