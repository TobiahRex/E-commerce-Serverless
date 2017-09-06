import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import ErrorMsg from './errorMsgCart';
import {
  nicotineStrengthConverter as NicotineStrengthConverter,
} from '../../utilities.imports';

function ShoppingCartWebProductRow({
  productObj,
  qtyHandler,
  deleteFromCart,
}) {
  return (
    <tr key={`shopping-cart-table-row-${productObj._id}`} className="shopping-cart-table-body-row">
      <td className="shopping-cart-table-body-infobox">
        <div className="shopping-cart-table-body-infobox-flexparent">
          <div className="shopping-cart-table-body-infobox-img">
            <Link to={`/juice/${productObj.product.slug}`}>
              <img
                src={productObj.product.images[0].url}
                className="shopping-cart-table-body-infobox-img-src" alt={productObj.product.title}
              />
            </Link>
          </div>
          <ul className="shopping-cart-table-body-infobox-list">
            <li className="shopping-cart-table-body-infobox-title">
              <Link to={`/juice/${productObj.product.slug}`}>
                <p>{productObj.product.title}</p>
              </Link>
            </li>
            <li className="shopping-cart-table-body-infobox-nicotine">
              <p>Nicotine Strength:{'\u00A0'}</p>
              <i>{NicotineStrengthConverter(productObj.product.nicotineStrength)}</i>
            </li>
            <li className="shopping-cart-table-body-infobox-sku">
              <p>SKU:{'\u00A0'}</p>
              <p>{productObj.product.sku}</p>
            </li>
            <li className="shopping-cart-table-body-infobox-trash">
              <button
                data-id={productObj._id}
                className="sweep-right"
                onClick={deleteFromCart}
              >
                <FontAwesome name="trash-o" />
              </button>
            </li>
          </ul>
        </div>
      </td>
      <td className="shopping-cart-table-body-price">
        <div className="shopping-cart-table-body-price-flexparent">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{Number(productObj.product.price).toFixed(2)}</h3>
        </div>
      </td>
      <td className="shopping-cart-table-body-qty">
        <div className="shopping-cart-table-body-qty-flexparent">
          <ul className="shopping-cart-table-body-qty-items">
            <li className="shopping-cart-table-body-qty-readout">
              <p>{productObj.qty}</p>
            </li>
            <li className="shopping-cart-table-body-qty-btns">
              <button
                data-id={productObj._id}
                data-tag="qty-plus"
                className="shopping-cart-table-body-qty-plus sweep-right"
                onClick={qtyHandler}
              >
                <FontAwesome name="plus" />
              </button>

              <button
                data-id={productObj._id}
                data-tag="qty-minus"
                className="shopping-cart-table-body-qty-minus sweep-right"
                onClick={qtyHandler}
              >
                <FontAwesome name="minus" />
              </button>
            </li>
          </ul>
          <ErrorMsg error={productObj.error} errorMsg={productObj.error.message} />
        </div>
      </td>
      <td className="shopping-cart-table-body-total">
        <div className="shopping-cart-table-body-total-flexparent">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{(productObj.qty * Number(productObj.product.price)).toFixed(2)}</h3>
        </div>
      </td>
    </tr>
  );
}
const { objectOf, any, func } = PropTypes;

const propTypes = {
  productObj: objectOf(any).isRequired,
  qtyHandler: func.isRequired,
  deleteFromCart: func.isRequired,
};

ShoppingCartWebProductRow.propTypes = propTypes;

export default ShoppingCartWebProductRow;
