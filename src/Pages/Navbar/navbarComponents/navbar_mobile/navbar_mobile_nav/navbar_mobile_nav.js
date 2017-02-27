import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import NavbarMobileNavMainBar from './navbar_mobile_nav_mainBar/navbar_mobile_nav_mainBar';
import NavbarMobileNavDropdnContent from './navbar_mobile_nav_dropdnContent/navbar_mobile_nav_dropdnContent';
import { setScreenSize } from '../../../../../Services/asynchDispatchServices';

class NavbarMobileNav extends Component {
  static propTypes = {
    mobileNavbarExpanded: PropTypes.bool,
    cartQty: PropTypes.number,
    screenSize: PropTypes.number,
    refreshMobileSize: PropTypes.func.isRequired,
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
    // const element = document.querySelector('.navbar-mobile-nav-hamburger');
    // const hamStyle = window.getComputedStyle(element);
    // alert(`alignItem = ${hamStyle.alignItems} | display = ${hamStyle.display} | justifyContent = ${hamStyle.justifyContent} | `);
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
  // TODO refactor handle Scroll to only dispatch action if the current screenSize is different than the screenSize in state.
  handleScroll = (e) => {
    const position = e.srcElement.body.scrollTop;
    if (position > 205) {
      if (this.props.screenSize !== window.screen.width) {
        this.props.refreshMobileSize();
      }
      this.setState({ navbarFixed: true });
    } else if (position < 205) {
      if (this.props.screenSize !== window.screen.width) {
        this.props.refreshMobileSize();
      }
      this.setState({ navbarFixed: false });
    }
  }

  toggleDropdown = () =>
    this.setState({ ddOpen: !this.state.ddOpen });

  render() {
    const {
      cartQty,
      screenSize,
    } = this.props;
    const navbarSize = screenSize - 14;
    const style = this.state.navbarFixed ? {
      transform: 'translateX(0px)',
      top: 0,
      position: 'fixed',
      width: `${navbarSize}px`,
      zIndex: 20,
    } : {};

    return (
      <div className="navbar-mobile-nav" style={style}>
        <NavbarMobileNavMainBar
          cartQty={cartQty}
          toggleDropdown={this.toggleDropdown}
          ddOpen={this.state.ddOpen}
        />
        <NavbarMobileNavDropdnContent
          screenSize={navbarSize}
          ddOpen={this.state.ddOpen}
          toggleDropdown={this.toggleDropdown}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ mobile }) => ({
  screenSize: Number(mobile.screenWidth),
});
const mapDispatchToProp = dispatch => ({
  refreshMobileSize: () => setScreenSize(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(NavbarMobileNav);

/* TODO
1. This component is mapped to State and received the three props defined in propTypes.
2. Hamburger Icon reference = http://elijahmanor.com/css-animated-hamburger-icon/
*/
