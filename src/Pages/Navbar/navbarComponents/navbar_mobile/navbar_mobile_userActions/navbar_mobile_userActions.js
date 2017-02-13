import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import uuid from 'uuid';

/* TODO
1. Redux Action method "logoutUser"
2. Redux State property "active_user : true/false"
3. Remove UUID as dummy generator.
*/

class NavbarMobileActions extends Component {
  static propTypes = {
    active_user: PropTypes.bool,
    logoutUser: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      active_user: this.props.active_user,
    };
  }

  logoutUser = () => this.props.logoutUser;

  render() {
    return (
      <div className="navbar-mobile-actions">
        <div className="navbar-mobile-actions-signedIn hidden">
          <div className="navbar-mobile-actions-signedIn-myaccount-title sweep-right">
            <Link
              to={`/user/${uuid()}`}
              className="navbar-mobile-actions-signedIn-myaccount-title-link"
            >My Account</Link>
          </div>
          <div className="navbar-mobile-actions-signedIn-checkout-title sweep-right">
            <Link
              to={'/checkout'}
              className="navbar-mobile-actions-signedIn-checkout-title-link"
            >Checkout</Link>
          </div>
          <div className="navbar-mobile-actions-signedIn-signOut-title sweep-right">
            <button
              className="navbar-mobile-actions-signedIn-signOut-title-button"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="navbar-mobile-actions-notSignedIn">
          <div className="navbar-mobile-actions-notSignedIn-sign-in-title sweep-right">
            <Link
              to={'/login'}
              className="navbar-mobile-actions-notSignedIn-sign-in-title-link"
            >Login</Link>
          </div>
          <div className="navbar-mobile-actions-notSignedIn-register-title sweep-right">
            <Link
              to={'/register'}
              className="navbar-mobile-actions-notSignedIn-register-title-link"
            >Register</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarMobileActions;
