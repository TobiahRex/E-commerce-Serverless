import React, { PropTypes, PureComponent } from 'react';

class NavbarCartProductsCardInfo extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    nicotine: PropTypes.number,
  }

  render() {
    const { title, quantity, price, nicotine } = this.props;
    return (
      <div className="products-list-card-info">
        <div className="product-title">
          {title ? `${title}` : '<TITLE HERE>'}
        </div>
        <div className="product-qty">
          {quantity ? `${quantity} x $ ${price}.00` : '<QTY HERE>'}
        </div>
        <div className="nic-strength">
          <i>
            {nicotine ? `${nicotine}mg` : '<NIC STRENGTH HERE>'}
          </i>
        </div>
      </div>
    );
  }
}

export default NavbarCartProductsCardInfo;
