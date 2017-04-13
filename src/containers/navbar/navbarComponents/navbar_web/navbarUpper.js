import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { auth as AuthService } from '../../../../navigation/routes';


import NavbarOptions from './navbar_web_options/navbarOptions';
import NavbarUserAction from './navbar_web_userActions/navbarUserActions';
import NavbarCart from './navbar_web_cart/navbarCart';

class NavbarUpper extends Component {
  static propTypes = {
    user: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  logoutUser = () => AuthService.logout();

  render() {
    return (
      <div className="navbar-actionSection-upper">
        <NavbarOptions />
        {/* TODO:
        Options will receive Option handlers & Active Language & Currency Qty  */}
        <NavbarUserAction
          activeUser={this.props.activeUser}
          logoutUser={this.props.logoutUser}
        />
        <NavbarCart />
        {/* TODO: Cart will receive Cart Qty & Handlers:
          1. Remove Product
        2. Data currenlty in cart to render dynamically */}
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, null)(NavbarUpper);
