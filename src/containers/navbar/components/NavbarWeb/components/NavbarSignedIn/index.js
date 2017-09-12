import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { auth as AuthService } from './assets/utils';

const { objectOf, any } = PropTypes;

class NavbarUserActionsSignedin extends PureComponent {
  static propTypes = {
    activeUser: objectOf(any),
  }
  static defaultProps = {
    activeUser: {
      pictures: {
        small: '',
        default: '/images/default-avatar.png',
      },
    },
  }

  logout = () => AuthService.logout();

  render() {
    return (
      <ul className="upper-actions__signedIn" >
        <li className="signedIn__logout--title">
          <button onClick={this.logout} className="logout__button" >
            Logout
          </button>
        </li>
        <li className="signedIn__checkout--title" >
          <Link to={'/express_checkout'} className="checkout__link">
            Checkout
          </Link>
        </li>
        <li className="signedIn__myAccount--title">
          <div className="myAccount__link">
            <img
              className="myAccount__link--picture"
              src={
                this.props.activeUser.pictures.small || this.props.activeUser.pictures.default
              }
              alt="My Account"
            />
          </div>
          {/* TODO: Add this in MVP 2.
            <Link to={`/user/${123123}`} className="myAccount__link">
            <img
              className="myAccount__link--picture"
              src={
                this.props.activeUser.pictures.small || this.props.activeUser.pictures.default
              }
              alt="My Account"
            />
          </Link> */}
        </li>
      </ul>
    );
  }
}
export default NavbarUserActionsSignedin;
