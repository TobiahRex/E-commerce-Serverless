import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import NavbarMobileNavMainBar from './navbar_mobile_nav_mainBar/navbar_mobile_nav_mainBar';
import NavbarMobileNavDropdnContent from './navbar_mobile_nav_dropdnContent/navbar_mobile_nav_dropdnContent';

class NavbarMobileNav extends Component {
  static propTypes = {
    mobileNavbarExpanded: PropTypes.bool,
    activePage: PropTypes.string,
    cartQty: PropTypes.number,
    screenSize: PropTypes.string,
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
      navbarFixed: false,
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

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll = (e) => {
    const position = e.srcElement.body.scrollTop;
    if (position > 200) {
      this.setState({ navbarFixed: true });
    } else if (position < 200) {
      this.setState({ navbarFixed: false });
    }
  }

  toggleDropdown = (id, e) => {
    if (id === 'hamburger') {
      e.preventDefault();
    }
    this.setState({ ddOpen: !this.state.ddOpen });
  };

  render() {
    const {
      activePage,
      cartQty,
      screenSize,
    } = this.props;
    const style = this.state.navbarFixed ? {
      transform: 'translateX(0px)',
      top: 0,
      position: 'fixed',
      width: `${parseInt(screenSize, 10) - 14}px`,
      zIndex: 20,
    } : {};

    return (
      <div className="navbar-mobile-nav" style={style}>
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
const mapStateToProps = ({ mobile, session }) => ({
  screenSize: mobile.screenSize,
  activePage: session.currentActivePage,
});
export default connect(mapStateToProps, null)(NavbarMobileNav);

/* TODO
1. This component is mapped to State and received the three props defined in propTypes.
2. Hamburger Icon reference = http://elijahmanor.com/css-animated-hamburger-icon/
*/
