import React from 'react';
import PropTypes from 'prop-types';

function NavbarCartProductsCardInfo({ juiceObj }) {
  const { title, qty, price, strength } = juiceObj;
  return (
    <div className="products-list-card-info">
      <div className="product-title">
        {title && `${title}`}
      </div>
      <div className="product-qty">
        {qty && `${qty} x $ ${Number(price)}.00`}
      </div>
      <div className="nic-strength">
        <i>
          {strength && `${strength}mg`}
        </i>
      </div>
    </div>
  );
}
const { shape, string, number, arrayOf } = PropTypes;
NavbarCartProductsCardInfo.propTypes = {
  juiceObj: shape({
    id: string,
    imageUrl: string,
    nicotine_strengths: arrayOf(string),
    price: string,
    qty: number,
    routeTag: string,
    strength: number,
    title: string,
  }).isRequired,
};
export default NavbarCartProductsCardInfo;
