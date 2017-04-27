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
        <NavbarOptions />
        <NavbarUserActions activeUser={this.state.loggedIn} />
        <NavbarCart />
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});

export default connect(mapStateToProps, null)(NavbarUpper);

/* Nested Component Map:
  1. NavbarOptions = func
  2. NavbarUserActions == func
  3. NavbarCart = func
*/
