import React, { PureComponent } from 'react';
import NavbarCartDropdnContent from './navbar_web_cart_dropdn/navbarCart_dropdn_content';
import NavbarCartMainButton from './navbarCart_mainButton';

class NavbarCart extends PureComponent {
  static propTypes = {
    qty: PropTypes.number.isRequired,
  }
  render() {
    return (
      <div className="mycart-main">
        <NavbarCartMainButton qty={this.state.qty} />
        <NavbarCartDropdnContent />
      </div>
    );
  }
}
export default NavbarCart;
