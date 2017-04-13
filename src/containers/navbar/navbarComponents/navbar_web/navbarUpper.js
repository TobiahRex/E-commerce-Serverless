import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import NavbarOptions from './navbar_web_options/navbarOptions';
import NavbarUserActions from './navbar_web_userActions/navbarUserActions';
import NavbarCart from './navbar_web_cart/navbarCart';

class NavbarUpper extends Component {
  static propTypes = {
    user: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  componentWillReceiveProps = ({ user }) => this.setState({ user });

  render() {
    return (
      <div className="navbar-actionSection-upper">

        {/* TODO:
        Options will receive Option handlers & Active Language & Currency Qty  */}
        <NavbarOptions />

        <NavbarUserActions activeUser={this.props.user.loggedIn} />


        {/* TODO: Cart will receive Cart Qty & Handlers:
          1. Remove Product
        2. Data currenlty in cart to render dynamically */}
        <NavbarCart />
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, null)(NavbarUpper);
