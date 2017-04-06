import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import uuid from 'uuid'; // TODO Remove this once you have user ID's from BE.

class NavbarMobileUserActionsSignedIn extends PureComponent {
  static defaultProps = {
    activeUser: null,
  }
  static propTypes = {
    activeUser: PropTypes.bool,
    logoutUser: PropTypes.func.isRequired,
  }

  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  logout = () => this.props.logoutUser();

  renderNavbarActions = () => {
    const { profilePicture } = this.props.activeUser;

  }

  render() {
    return (
      <ul className="actions__signedIn--list">
        <li className="list--myAccount sweep-right">
          <Link
            to={`/user_${uuid()}`}
            className="myAccount__link"
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
