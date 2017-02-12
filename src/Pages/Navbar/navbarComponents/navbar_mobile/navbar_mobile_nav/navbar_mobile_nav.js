import React, { PropTypes, Component } from 'react';

import NavbarMobileNavMainBar from './navbar_mobile_nav_mainBar/navbar_mobile_nav_mainBar';
import NavbarMobileNavDropdnContent from './navbar_mobile_nav_dropdnContent/navbar_mobile_nav_dropdnContent';

class NavbarMobileNav extends Component {
  static propTypes = {
    mobileNavbarExpanded: PropTypes.bool,
    activePage: PropTypes.string,
    cartQty: PropTypes.number,
  }

  static defaultProps = {
    active: false,
    role: 'user',
    _id: null,
  }

  static propTypes = {
    mobileNavbarExpanded: PropTypes.bool,
    activePage: PropTypes.string,
    cartQty: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.toasts = {
      logoutToast: null,
      loginFail: null,
      loginSuccess: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      mobileNavbarExpanded,
      activePage,
      cartQty,
    } = nextProps;
    if (mobileNavbarExpanded !== this.state.mobileNavbarExpanded) {
      this.setState({ mobileNavbarExpanded });
    }
    if (activePage !== this.state.activePage) {
      this.setState({ activePage });
    }
    if (cartQty !== this.state.cartQty) {
      this.setState({ cartQty });
    }
  }

  render() {
    const {
      mobileNavbarExpanded,
      activePage,
      cartQty } = this.props;
    return (
      <div className="navbar-mobile-nav">
        <NavbarMobileNavMainBar
          mobileNavbarExpanded={mobileNavbarExpanded}
          activePage={activePage}
          cartQty={cartQty}
        />

        <NavbarMobileNavDropdnContent />
      </div>
    );
  }
}

export default NavbarMobileNav;

/* TODO
1. This component is mapped to State and received the three props defined in propTypes.

2. Hamburger Icon reference = http://elijahmanor.com/css-animated-hamburger-icon/

*/
