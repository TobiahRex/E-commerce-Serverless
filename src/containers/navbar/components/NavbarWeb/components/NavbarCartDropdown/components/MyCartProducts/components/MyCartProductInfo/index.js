import React from 'react';
import PropTypes from 'prop-types';
import { convertStrengthToNumber } from '../../assets/utils';

function MyCartProductInfo({
  title,
  qty,
  price,
  nicotineStrength,
}) {
  if (typeof nicotineStrength === 'string') {
    nicotineStrength = convertStrengthToNumber(nicotineStrength);
  }

  return (
    <div className="product-list-card__product-info">
      <div className="product-info__product-title">
        <p className="product-title__nav-cart-blurb">
          {title}
        </p>
      </div>
      <div className="product-info__qty-price">
        <p className="qty-price__nav-cart-blurb">
          {`${qty} x $ ${Number(price)}.00`}
        </p>
      </div>
      <div className="product-info__nicotine">
        <p className="nicotine__nav-cart-blurb">
          {`${nicotineStrength} mg`}
        </p>
      </div>
    </div>
  );
}
const { string, number } = PropTypes;
MyCartProductInfo.defaultProps = {
  price: '',
  qty: 0,
  title: '',
  nicotineStrength: '',
};
MyCartProductInfo.propTypes = {
  price: string,
  qty: number,
  title: string,
  nicotineStrength: string,
};

export default MyCartProductInfo;
