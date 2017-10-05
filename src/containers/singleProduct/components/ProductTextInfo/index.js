import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductSku,
  ProductPrice,
  ProductShipping,
} from './components';

function ProductTextInfo({ price, sku, inStock }) {
  return (
    <div className="product-text__product-info">
      <ProductPrice price={price} />
      <div className="product-info__additional-info">
        <ProductShipping />
        <ProductSku sku={sku} inStock={inStock} />
      </div>
    </div>
  );
}
const { string, bool } = PropTypes;
ProductTextInfo.propTypes = {
  id: string.isRequired,
  sku: string.isRequired,
  price: string.isRequired,
  inStock: bool.isRequired,
};
export default ProductTextInfo;
