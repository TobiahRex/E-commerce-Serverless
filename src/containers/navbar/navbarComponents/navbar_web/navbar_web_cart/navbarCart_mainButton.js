import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class NavbarCartMainButton extends PureComponent {
  static propTypes = {
    qty: PropTypes.string,
  }
  static defaultProps = {
    qty: 0,
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
export default NavbarCartMainButton;
