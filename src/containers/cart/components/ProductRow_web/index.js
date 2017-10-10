import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  ErrorMsg,
  ProductImg,
  ProductDetails,
  ProductUnitPrice,
} from '../';

function ShoppingCartWebProductRow({
  productObj,
  qtyHandler,
  deleteFromCart,
}) {
  return (
    <tr key={`shopping-cart-table-row-${productObj._id}`} className="shopping-cart-table-body-row">
      <td className="shopping-cart-table-body-infobox">

        <div className="line-item__juice-container">
          <ProductImg productObj={productObj} />
          <ProductDetails
            productObj={productObj}
            deleteFromCart={deleteFromCart}
          />
        </div>

      </td>
      <td className="shopping-cart-table-body-price">
        {/* <div className="shopping-cart-table-body-price-flexparent">
          <FontAwesome name="usd" />&nbsp;
          <h3>{Number(productObj.product.price).toFixed(2)}</h3>
        </div> */}

        <ProductUnitPrice productObj={productObj} />
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
          <ErrorMsg error={productObj.error} errorMsg={productObj.error.message[IntlLocale]} />
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
