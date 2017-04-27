import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavbarOptions from './navbar_web_options/navbarOptions';
import NavbarUserActions from './navbar_web_userActions/navbarUserActions';
import NavbarCart from './navbar_web_cart/navbarCart';

class NavbarUpper extends Component {
  static propTypes = {
    activeLanguage: PropTypes.string.isRequired,
    saveLanguage: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      activeLanguage: props.activeLanguage,
    }
  }
  render() {
    return (
      <div className="navbar-actionSection-upper">
        <NavbarOptions />
        <NavbarUserActions />
        <NavbarCart />
      </div>
    );
  }
}

/* Nested Component Map:
  1. NavbarOptions = func
  2. NavbarUserActions == func
  3. NavbarCart = func
*/
