import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavbarCartDropdnContent from './navbar_web_cart_dropdn/navbarCart_dropdn_content';
import NavbarCartMainButton from './navbarCart_mainButton';

/* TODO
1. Navbar has an entire CRUD capability if hovered over.  Therefore the component that is revealed upon hover, will be passed down several CRUD like methods via props to PureComponents.

2. The NavbarCartDropdnContent comp has 3 LINKS
- Edit: Takes the user back to the product page of the item.
- View Cart: goes to cart.
- Checkout: goes to checkout.
*/
const { number } = PropTypes;

class NavbarCart extends Component {
  static propTypes = {
    qty: number.isRequired,
  }
  constructor(props) {
    super(props);
  }

  removeItem = () => console.info('Removed item from cart');

  render() {
    return (
      <div className="navbar actionSection upper mycart-container">
        <div className="mycart-main">
          <NavbarCartMainButton />
          <NavbarCartDropdnContent />
        </div>
      </div>
    );
  }
}

export default NavbarCart;
