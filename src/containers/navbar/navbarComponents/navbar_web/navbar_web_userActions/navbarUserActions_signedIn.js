import React, { PureComponent, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { Link } from 'react-router';

import { auth as AuthService } from '../../../../../navigation/routes';

class NavbarUserActionsSignin extends PureComponent {
  static propTypes = {
    user: PropTypes.objectOf(PropTypes.any).isRequired,
    push: PropTypes.func.isRequired,
  }
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  logout = (e) => {
    e.preventDefault();
    AuthService.logout();
    this.props.push('/');
  };

  render() {
    const { push, user } = this.props;
    return (
      <ul className="navbar-actionSection-upper-actions-signedIn" >
        <li className="sign-out-title">
          <a className="navbar-userActions-signOut-title-button" onClick={e => this.logout(e)}>Logout</a>
        </li>
        <li className="checkout-title" onClick={() => push('/express_checkout')}>
          <Link to={'/express_checkout'} className="navbar-userActions-checkout-title-link">
            Checkout
          </Link>
        </li>
        <li className="my-account-title" onClick={() => push(`/user_${123123}`)}>
          <Link to={`/user_${123123}`} className="navbar-userActions-myaccount-title-link">
            <img src={user.picture} alt="My Account" className="signedIn--profile-pic" />
          </Link>
        </li>
      </ul>

    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...routerActions }, dispatch);

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarUserActionsSignin);
