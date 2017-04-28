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
      <div className="total-price">
        <span className="total-price-title">Total Price</span>
        <span className="total-price-amount">
          <FontAwesome name="usd" />&nbsp;
          {this.props.cart_total || '00'}.00
        </span>
      </div>
    );
  }
}

export default NavbarCartTotalPrice;
