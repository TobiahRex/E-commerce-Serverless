import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class NavbarCartMainButton extends PureComponent {
  static propTypes = {
    qty: PropTypes.number.isRequired,
  }
  render() {
    return (
      <span className="mainbtn">
        <Link to="/cart" className="mainbtn-mycart-link">
          <div className="mainbtn-mycart-link-title">
            <span>
              My Cart
            </span>
          </div>
          <div className="mainbtn-mycart-link-cartqty">
            <span>
              {this.props.qty}
            </span>
          </div>
        </Link>
      </span>
    );
  }
}
const calculateQty = (loggedIn, cartObj) => (
  cartObj[loggedIn ? 'member' : 'guest']
  .reduce((accum, next) => {
    if (next.id) {
      accum += 1;
      return accum;
    }
    return accum;
  }, 0)
);
export default connect(({ auth, orders }) => ({
  qty: calculateQty(auth.loggedIn, orders.cart),
}), null)(NavbarCartMainButton);
