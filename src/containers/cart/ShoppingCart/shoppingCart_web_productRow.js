import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import ErrorMsg from './errorMsgCart';

function ShoppingCartWebProductRow({
  keyNum,
  juiceObj,
  qtyHandler,
  deleteFromCart,
}) {
  return (
    <tr key={`shopping-cart-table-row-${juiceObj.name}-${keyNum}`} className="shopping-cart-table-body-row">
      <td className="shopping-cart-table-body-infobox">
        <div className="shopping-cart-table-body-infobox-flexparent">
          <div className="shopping-cart-table-body-infobox-img">
            <Link to={`/juice/${juiceObj.routeTag}`}>
              <img
                src={juiceObj.images[0].url}
                className="shopping-cart-table-body-infobox-img-src" alt={juiceObj.title}
              />
            </Link>
          </div>
          <ul className="shopping-cart-table-body-infobox-list">
            <li className="shopping-cart-table-body-infobox-title">
              <Link to={`/juice/${juiceObj.routeTag}`}>
                <p>{juiceObj.title}</p>
              </Link>
            </li>
            <li className="shopping-cart-table-body-infobox-nicotine">
              <p>Nicotine Strength:{'\u00A0'}</p>
              <i>{juiceObj.nicotineStrength}</i>
            </li>
            <li className="shopping-cart-table-body-infobox-sku">
              <p>SKU:{'\u00A0'}</p>
              <p>{juiceObj.sku}</p>
            </li>
            <li className="shopping-cart-table-body-infobox-trash">
              <button
                data-id={juiceObj._id}
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
          <h3>{'\u00A0'}{`${juiceObj.price}.00`}</h3>
        </div>
      </td>
      <td className="shopping-cart-table-body-qty">
        <div className="shopping-cart-table-body-qty-flexparent">
          <ul className="shopping-cart-table-body-qty-items">
            <li className="shopping-cart-table-body-qty-readout">
              <p>{juiceObj.qty}</p>
            </li>
            <li className="shopping-cart-table-body-qty-btns">
              <button
                data-id={juiceObj._id}
                data-tag="qty-plus"
                className="shopping-cart-table-body-qty-plus sweep-right"
                onClick={qtyHandler}
              >
                <FontAwesome name="plus" />
              </button>

              <button
                data-id={juiceObj._id}
                data-tag="qty-minus"
                className="shopping-cart-table-body-qty-minus sweep-right"
                onClick={qtyHandler}
              >
                <FontAwesome name="minus" />
              </button>
            </li>
          </ul>
          <ErrorMsg error={juiceObj.error} errorMsg={juiceObj.errorMsg} />
        </div>
      </td>
      <td className="shopping-cart-table-body-total">
        <div className="shopping-cart-table-body-total-flexparent">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{`${juiceObj.qty * Number(juiceObj.price)}.00`}</h3>
        </div>
      </td>
    </tr>
  );
}
const { objectOf, any, number, func } = PropTypes;

const propTypes = {
  keyNum: number.isRequired,
  juiceObj: objectOf(any).isRequired,
  qtyHandler: func.isRequired,
  deleteFromCart: func.isRequired,
};

ShoppingCartWebProductRow.propTypes = propTypes;

export default ShoppingCartWebProductRow;
