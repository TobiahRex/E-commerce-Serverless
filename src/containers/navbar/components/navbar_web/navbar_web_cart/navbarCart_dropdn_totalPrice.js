import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

/* TODO
1. Received "cart_total" from state.  This total represents the PRE-TAX total.  NOT the GRAND TOTAL.
*/

class NavbarCartTotalPrice extends PureComponent {
  static propTypes = {
    cart_total: PropTypes.number,
  }

  render() {
    return (
      
    );
  }
}

export default NavbarCartTotalPrice;
