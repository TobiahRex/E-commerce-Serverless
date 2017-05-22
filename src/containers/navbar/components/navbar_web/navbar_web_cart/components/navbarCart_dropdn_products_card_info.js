import React from 'react';
import PropTypes from 'prop-types';

function NavbarCartProductsCardInfo({
  title,
  qty,
  price,
  strength,
}) {
  return (
    <div className="products-list-card-info">
      <div className="product-title">
        {title}
      </div>
      <div className="product-qty">
        {`${qty} x $ ${Number(price)}.00`}
      </div>
      <div className="nic-strength">
        <i>
          {`${strength}mg`}
        </i>
      </div>
    </div>
  );
}
const { string, number } = PropTypes;
NavbarCartProductsCardInfo.defaultProps = {
  price: '',
  qty: 0,
  strength: 0,
  title: '',
};
NavbarCartProductsCardInfo.propTypes = {
  price: string,
  qty: number,
  strength: number,
  title: string,
};

export default NavbarCartProductsCardInfo;
