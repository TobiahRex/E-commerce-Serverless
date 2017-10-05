import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function PriceInfo({ price, sku, inStock }) {
  return (
    <div className="product-text__product-info">
      <div className="product-info__product-price">
        <div className="product-price__blurb" data-ix="product-page-price-scroll">
          &nbsp;
          $&nbsp;{price}.00
        </div>
      </div>
      <div className="product-info__additional-info">
        <div className="additional-info__product-shipping" data-ix="product-page-price-scroll-2">
          <div className="product-shipping__blurb-container" id="product-shipping__blurb-container">
            <div className="blurb-container__tax-blurb">+ TAX</div>
          </div>
          <div className="product-shipping__blurb-container" id="product-shipping__blurb-container">
            <div className="blurb-container__shipping-blurb">Free Shipping</div>
          </div>
        </div>
        <div className="additional-info__product-sku" data-ix="product-page-price-scroll-3">
          <div className="product-sku__sku-blurb">
            <div className="sku-blurb__sku-text">SKU: NJ2JP0001</div>
          </div>
          <div className="product-sku__stock-info">
            <div className="stock-info__stock-text">IN STOCK</div>
          </div>
        </div>
      </div>
    </div>
    <div className="desc__price-row">
      <ul className="price-row__list">
        <li className="list--price">
          <h1>
            <FontAwesome name="usd" className="price__fa" />&nbsp;{price}.00
          </h1>
        </li>
        <li className="list--tax">
          <div className="tax__tax--title">
            <p>+ <IntlMsg id="product.single.price-info.tax" /></p>
          </div>
          <div className="tax__shipping--title">
            <p><IntlMsg id="product.single.price-info.free-shipping" /></p>
          </div>
        </li>
        <li className="list--stock">
          <div className="stock__sku--title">
            <p>SKU: {sku}</p>
          </div>
          <div className="stock__stock--title">
            <h3>{
                 inStock ?
                   <IntlMsg id="product.single.price-info.in-stock" /> :
              <IntlMsg id="product.single.price-info.out-of-stock" />
            }</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}
const { string, bool } = PropTypes;
PriceInfo.propTypes = {
  id: string.isRequired,
  sku: string.isRequired,
  price: string.isRequired,
  inStock: bool.isRequired,
};
export default PriceInfo;
