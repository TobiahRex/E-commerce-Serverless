import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import NavbarOptions from './navbar_web_options/navbarOptions';
import NavbarUserActions from './navbar_web_userActions/navbarUserActions';
import NavbarCart from './navbar_web_cart/navbarCart';

class NavbarUpper extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
    };
  }
  componentWillReceiveProps = ({ loggedIn }) => this.setState({ loggedIn });

  render() {
    return (
      <div className="navbar-actionSection-upper">

        {/* TODO:
        Options will receive Option handlers & Active Language & Currency Qty  */}
        <NavbarOptions />

        <NavbarUserActions activeUser={this.props.loggedIn} />


        {/* TODO: Cart will receive Cart Qty & Handlers:
          1. Remove Product
        2. Data currenlty in cart to render dynamically */}
        <NavbarCart />
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});

export default connect(mapStateToProps, null)(NavbarUpper);
