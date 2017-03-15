import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router-dom';

/* TODO
1. This component will receive a QTY from state to be updated as items are added to the users cart.  This will be done via the parent MyCart component.

2. The LINK will be "to={'/mycart'}"

*/

class NavbarCartMainButton extends PureComponent {
  static propTypes = {
    quantity: PropTypes.string,
  }

  render() {
    return (
      <span className="mainbtn">
        <Link to="/cart" className="mainbtn-mycart-link">
          <div className="mainbtn-mycart-link-title">
            <span>My Cart</span>
          </div>
          <div className="mainbtn-mycart-link-cartqty">
            <span>{this.props.quantity || 0}</span>
          </div>
        </Link>
      </span>
    );
  }
}

export default NavbarCartMainButton;
