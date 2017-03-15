import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import history from '../../../../../Services/history';
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
        <li className="my-account-title sweep-right" onClick={() => history.push(`/user_${uuid()}`)}>
          <Link to={`/user_${uuid()}`} className="navbar-userActions-myaccount-title-link">
            My Account
          </Link>
        </li>
        <li className="checkout-title sweep-right" onClick={() => history.push('/express_checkout')}>
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
