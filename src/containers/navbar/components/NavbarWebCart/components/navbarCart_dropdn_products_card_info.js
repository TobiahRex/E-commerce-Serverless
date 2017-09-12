import React from 'react';
import PropTypes from 'prop-types';
import convertStrengthToNumber from '../../../../../../services/utils/convertStrengthToNumber';

function NavbarCartProductsCardInfo({
  title,
  qty,
  price,
  nicotineStrength,
}) {
  if (typeof nicotineStrength === 'string') {
    nicotineStrength = convertStrengthToNumber(nicotineStrength);
  }

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
          {`${nicotineStrength} mg`}
        </i>
      </div>
    </div>
  );
}
const { string, number } = PropTypes;
NavbarCartProductsCardInfo.defaultProps = {
  price: '',
  qty: 0,
  title: '',
  nicotineStrength: '',
};
NavbarCartProductsCardInfo.propTypes = {
  price: string,
  qty: number,
  title: string,
  nicotineStrength: string,
};

export default NavbarCartProductsCardInfo;
