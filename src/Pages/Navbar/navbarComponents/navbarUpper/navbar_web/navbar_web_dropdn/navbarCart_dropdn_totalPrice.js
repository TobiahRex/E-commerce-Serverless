import React, { PropTypes, PureComponent } from 'react';

/* TODO
1. Received "total" from state.  This total represents the PRE-TAX total.  NOT the GRAND TOTAL.


*/

class NavbarCartTotalPrice extends PureComponent {
  static propTypes = {
    total: PropTypes.number,
  }

  render() {
    return (
      <div className="total-price">
        <span className="total-price-title">Total Price</span>
        <span className="total-price-amount">&nbsp; $ 10.00</span>
      </div>
    );
  }
}

export default NavbarCartTotalPrice;
