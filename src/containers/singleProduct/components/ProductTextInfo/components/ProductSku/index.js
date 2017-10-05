import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ProductSku({ sku, inStock }) {
  return (
    <div className="additional-info__product-sku" data-ix="product-page-price-scroll-3">
      <div className="product-sku__sku-blurb">
        <div className="sku-blurb__sku-text">
          SKU:&nbsp;
          {sku}
        </div>
      </div>
      <div className="product-sku__stock-info">
        <div className="stock-info__stock-text">
          {
            inStock ?
              <IntlMsg id="product.single.price-info.in-stock" /> :
              <IntlMsg id="product.single.price-info.out-of-stock" />
          }
        </div>
      </div>
    </div>
  );
}
ProductSku.propTypes = {
  sku: PropTypes.string.isRequired,
  inStock: PropTypes.string.isRequired,
};
export default ProductSku;
