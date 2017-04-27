import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavbarCartDropdnContent from './navbar_web_cart_dropdn/navbarCart_dropdn_content';
import NavbarCartMainButton from './navbarCart_mainButton';

const { number, arrayOf, object } = PropTypes;

class NavbarCart extends PureComponent {
  static propTypes = {
    qty: number.isRequired,
    cartProducts: arrayOf(object).isRequired,
  }
  render() {
    const { qty, cartProducts: products } = this.props;
    return (
      <div className="mycart-main">
        <NavbarCartMainButton qty={qty} />
        <NavbarCartDropdnContent
          cartProducts={products}
        />
      </div>
    );
  }
}
export default NavbarCart;
