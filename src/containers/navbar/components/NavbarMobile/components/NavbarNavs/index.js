import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mobileActions } from './assets/utils';

import {
  NavbarMainbar,
  NavbarDropdown,
} from './components';

const { number, func } = PropTypes;
class NavbarMobileNav extends Component {
  static propTypes = {
    cartQty: number.isRequired,
    screenSize: number.isRequired,
    refreshMobileSize: func.isRequired,
  }

  static defaultProps = {
    cartQty: 0,
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
    window.addEventListener('scroll', (e) => {
      this.handleScroll(e);
    });
  }

  componentWillReceiveProps({ activePage, cartQty }) {
    if (activePage !== this.state.activePage) {
      this.setState({ activePage });
    }
    if (cartQty !== this.state.cartQty) {
      this.setState({ cartQty });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      console.log('removing scroll listener.'); // eslint-disable-line no-console
    });
  }

  // TODO refactor handle Scroll to only dispatch action if the current screenSize is different than the screenSize in state.
  handleScroll = (e) => {
    const position = e.srcElement.body.scrollTop;
    const windowSize = window.screen.width;
    if (position > 205 && !this.state.navbarFixed) {
      this.setState({ navbarFixed: true }, () => {
        if (this.props.screenSize !== windowSize) {
          this.props.refreshMobileSize(String(windowSize));
        }
      });
    } else if (position < 205 && !!this.state.navbarFixed) {
      this.setState({ navbarFixed: false }, () => {
        if (this.props.screenSize !== windowSize) {
          this.props.refreshMobileSize(String(windowSize));
        }
      });
    }
  }

  toggleDropdown = () => this.setState(state => ({
    ...state,
    ddOpen: !this.state.ddOpen,
  }));

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
      <div className="navbar__mobile--nav" style={style}>
        <NavbarMainbar
          cartQty={cartQty}
          toggleDropdown={this.toggleDropdown}
          ddOpen={this.state.ddOpen}
        />
        <NavbarDropdown
          scrolling={this.state.navbarFixed}
          screenSize={navbarSize}
          ddOpen={this.state.ddOpen}
          toggleDropdown={this.toggleDropdown}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ mobile, orders }) => ({
  screenSize: Number(mobile.screenWidth),
  cartQty: orders.cart ? orders.cart.qty : 0, // TODO remove this 0 value once you've created the actions in redux for adding items to state.
});
const mapDispatchToProp = dispatch => ({
  refreshMobileSize: screenSize => dispatch(mobileActions.setScreenWidth(screenSize)),
});
export default connect(mapStateToProps, mapDispatchToProp)(NavbarMobileNav);

/* TODO
1. This component is mapped to State and received the three props defined in propTypes.
2. Hamburger Icon reference = http://elijahmanor.com/css-animated-hamburger-icon/
3. See TODO at mapStateToProps about cartQty.
*/
