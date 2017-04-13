import React, { PureComponent, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { Link } from 'react-router';
import uuid from 'uuid'; // TODO Remove this once you have user ID's from BE.

class NavbarUserActionsSignin extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
  }
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  signOut = () => console.info('user has signed out.');

  render() {
    const { push } = this.props;
    return (
      <ul
        // style={NavbarUserActionsSignin.styles.hidden}
        className="navbar-actionSection-upper-actions-signedIn"
      >
        <li className="sign-out-title">
          <a
            className="navbar-userActions-signOut-title-button"
            onClick={(e) => {
              e.preventDefault();
              console.warn('Sing out user!!!');
            }}
          >Logout</a>
        </li>
        <li className="checkout-title" onClick={() => push('/express_checkout')}>
          <Link to={'/express_checkout'} className="navbar-userActions-checkout-title-link">
            Checkout
          </Link>
        </li>
        <li className="my-account-title" onClick={() => push(`/user_${uuid()}`)}>
          <Link to={`/user_${uuid()}`} className="navbar-userActions-myaccount-title-link">
            <img src="../Images/mock_profile-pic.png" alt="My Account" className="signedIn--profile-pic" />
          </Link>
        </li>
      </ul>

    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...routerActions }, dispatch);
export default connect(null, mapDispatchToProps)(NavbarUserActionsSignin);
