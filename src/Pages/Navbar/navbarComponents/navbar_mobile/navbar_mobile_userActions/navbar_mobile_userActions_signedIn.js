import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import uuid from 'uuid'; // TODO Remove this once you have user ID's from BE.

class NavbarMobileUserActionsSignedIn extends PureComponent {
  static defaultProps = {
    activeUser: null,
  }
  static propTypes = {
    activeUser: PropTypes.objectOf(PropTypes.any),
    logoutUser: PropTypes.func.isRequired,
  }

  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  logout = () => this.props.logoutUser();

  render() {
    const { profilePicture, firstName, lastName } = this.props.activeUser;
    return (
      <ul className="actions__signedIn--list">
        <li className="list--signOut sweep-right-red">
          <a href="" className="signOut__button" onClick={() => this.logout()}>
            Logout
          </a>
        </li>
        <li className="list--checkout sweep-right-red">
          <Link to={'/express_checkout'} className="checkout__link" >
            Checkout
          </Link>
        </li>
        <li className="list--myAccount">
          <Link to={`/user_${uuid()}`} className="myAccount__link">
            <img src={profilePicture} alt={`${firstName} ${lastName}`} />
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavbarMobileUserActionsSignedIn;
