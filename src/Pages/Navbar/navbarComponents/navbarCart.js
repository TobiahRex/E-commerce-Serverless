import React, { Component } from 'react';

import NavbarCartDropdnContent from './navbarUpper/navbarCart_dropdnContent';
import NavbarCartMainButton from './navbarUpper/navbarCart_mainButton';

/* TODO
1. Navbar has an entire CRUD capability if hovered over.  Therefore the component that is revealed upon hover, will be passed down several CRUD like methods via props to PureComponents.

2. The NavbarCartMainButton comp, will nest the title & qty divs only.  The CartDetails component will exist OUTSIDE the link tab.

3. The NavbarCartDropdnContent comp has 3 LINKS
- Edit: Takes the user back to the product page of the item.
- View Cart: goes to cart.
- Checkout: goes to checkout.
*/

class NavbarCart extends Component {
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
