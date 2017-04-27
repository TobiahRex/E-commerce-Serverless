import React from 'react';
import PropTypes from 'prop-types';

function NavbarCartProductsCardInfo(props) {
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
const { shape, string, number } = PropTypes;
NavbarCartProductsCardInfo.propTypes = {
  juiceObj: shape({
    
  })
};
export default NavbarCartProductsCardInfo;
