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
        </i>π
      </div>
    </div>
  );
}
const { string, number } = PropTypes;
NavbarCartProductsCardInfo.propTypes = {
  price: string.isRequired,
  qty: number.isRequired,
  strength: number.isRequired,
  title: string.isRequired,
};
export default NavbarCartProductsCardInfo;
