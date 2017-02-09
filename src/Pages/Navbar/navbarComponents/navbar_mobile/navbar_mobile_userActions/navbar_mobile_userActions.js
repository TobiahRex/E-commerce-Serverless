import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

/* TODO
1. Redux Action method "logoutUser"
2. Redux State property "active_user : true/false"

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
        <div className="navbar-mobile-actions-signedIn">
          <div className="navbar-mobile-actions-signedIn-myaccount-title sweep-right">
            <Link
              to={'/my_account'}
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
              Sign Out
            </button>
          </div>
        </div>
        <div className="navbar-mobile-actions-notSignedIn hidden">
          <Link>Sign In</Link>
          <Link>Register</Link>
        </div>
      </div>
    );
  }
}

export default NavbarMobileActions;
