import React, { Component } from 'react';
import { Link } from 'react-router';

import NavbarMobileOptions from './navbar_mobile_options/navbarOptions_mobile';
import NavbarMobileActions from './navbar_mobile_userActions/navbar_mobile_userActions';
import NavbarMobileNav from './navbar_mobile_nav/navbar_mobile_nav';
import $ from 'jquery';
class NavbarMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarFixed: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // const num = 200; //number of pixels before modifying styles
    // console.log('hello from navbar');
    // $(window).bind('scroll', () => {
    //   console.warn('scrolling...');
    //   if ($(window).scrollTop() > num) {
    //     // $('.menu').addClass('fixed');
    //     console.info('passed navbar', window.scrollTop());
    //   } else {
    //     console.info('not yet...');
    //   }
    // });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll = (e) => {
    const position = e.srcElement.body.scrollTop;
    if (position > 200) {
      this.setState({ navbarFixed: true });
    }
  }

  render() {
    const { navbarFixed } = this.state;
    let navbarStyle;
    if (!navbarFixed) {
      navbarStyle = {
        transform: 'translateZ(0px)',
      };
    } else {
      navbarStyle = {
        transform: 'translateZ(0px)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
      };
    }

    return (
      <nav style={navbarStyle} className="navbar navbar-mobile">
        <div className="navbar-mobile-container">
          <Link to={'/'} className="navbar-mobile-logo-link">
            <div className="navbar-mobile-logo">
              <img className="navbar-mobile-logo-src" alt="nj2jp logo" />
            </div>
          </Link>
          <NavbarMobileOptions />
          <NavbarMobileActions />
          <NavbarMobileNav />
        </div>
      </nav>
    );
  }
}

export default NavbarMobile;
