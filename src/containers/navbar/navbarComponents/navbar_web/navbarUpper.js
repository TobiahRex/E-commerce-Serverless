import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarOptions from './navbar_web_options/navbarOptions';
import NavbarUserActions from './navbar_web_userActions/navbarUserActions';
import NavbarCart from './navbar_web_cart/navbarCart';

const { bool } = React.PropTypes;

class NavbarUpper extends Component {
  static propTypes = {
    loggedIn: bool,
  }
  static defaultProps = {
    loggedIn: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
    };
  }

  componentWillReceiveProps({ loggedIn }) {
    this.setState({ loggedIn });
  }

  render() {
    return (
      <div className="navbar-actionSection-upper">

        {/* TODO: Navbar Options will receive Option handlers & Active Language & Currency Qty  */}
        <NavbarOptions />

        {/* NOTE: This Component = functional */}
        <NavbarUserActions activeUser={this.state.loggedIn} />

        {/* TODO: Navbar Cart will receive Cart Qty & Handlers:
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
