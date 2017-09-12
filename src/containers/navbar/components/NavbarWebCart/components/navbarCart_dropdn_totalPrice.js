import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const { number } = PropTypes;

class NavbarCartTotalPrice extends PureComponent {
  static propTypes = {
    cart_total: number,
  }

  static defaultProps = {
    cart_total: 0,
  }
  render() {
    return (
      <div className="total-price">
        <span className="total-price-title">Total Price</span>
        <span className="total-price-amount">
          <FontAwesome name="usd" />{'\u00A0'}
          {this.props.cart_total || '00'}.00
        </span>
      </div>
    );
  }
}

export default NavbarCartTotalPrice;
