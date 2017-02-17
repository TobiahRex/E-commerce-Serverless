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

  constructor(props) {
    super(props);

    this.toasts = {
      logoutToast: null,
      loginFail: null,
      loginSuccess: null,
    };

    this.state = {
      ddOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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

  handleScroll = (e) => {
    const position = e.srcElement.body.scrollTop;
    if (position > 200) {
      this.setState({ navbarFixed: true });
    }
  }

  toggleDropdown = (id, e) => {
    console.warn('id: ', id);
    if (id === 'hamburger') {
      e.preventDefault();
    }
    this.setState({ ddOpen: !this.state.ddOpen });
  };

  render() {
    const {
      activePage,
      cartQty } = this.props;
    return (
      <div className="navbar-mobile-nav">
        <NavbarMobileNavMainBar
          activePage={activePage}
          cartQty={cartQty}
          toggleDropdown={this.toggleDropdown}
          ddOpen={this.state.ddOpen}
        />

        <NavbarMobileNavDropdnContent
          ddOpen={this.state.ddOpen}
          toggleDropdown={this.toggleDropdown}
        />
      </div>
    );
  }
}

export default NavbarMobileNav;

/* TODO
1. This component is mapped to State and received the three props defined in propTypes.

2. Hamburger Icon reference = http://elijahmanor.com/css-animated-hamburger-icon/

*/
