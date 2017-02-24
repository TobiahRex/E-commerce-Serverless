import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  juiceObj: PropTypes.objectOf(PropTypes.any.isRequired),
  keyNum: PropTypes.number.isRequired,
};

function ShoppingCartWebProductRow({ juiceObj, keyNum }) {
  return (
    <tr key={`shopping-cart-table-row-${juiceObj.name}-${keyNum}`} className="shopping-cart-table-body-row">
      <td className="shopping-cart-table-body-infobox">
        <div className="shopping-cart-table-body-infobox-flexparent">
          <div className="shopping-cart-table-body-infobox-img">
            <img
              src={juiceObj.imgSrc}
              className="shopping-cart-table-body-infobox-img-src" alt={juiceObj.name}
            />
          </div>
          <ul className="shopping-cart-table-body-infobox-list">
            <li className="shopping-cart-table-body-infobox-title">
              <p>{juiceObj.name}</p>
            </li>
            <li className="shopping-cart-table-body-infobox-nicotine">
              <p>Nicotine Strength:{'\u00A0'}</p>
              <i>{juiceObj.nicotine}</i>
            </li>
            <li className="shopping-cart-table-body-infobox-sku">
              <p>SKU:{'\u00A0'}</p>
              <p>{juiceObj.sku}</p>
            </li>
            <li className="shopping-cart-table-body-infobox-trash">
              <button className="sweep-right">
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
              <button className="shopping-cart-table-body-qty-plus sweep-right">
                <FontAwesome name="plus" />
              </button>
              <button className="shopping-cart-table-body-qty-minus sweep-right">
                <FontAwesome name="minus" />
              </button>
            </li>
          </ul>
          <div className="shopping-cart-table-body-qty-msg">
            <p>Maximum 4 bottles per customer, per address.</p>
            <br />
            <p>Japanese Statute # 123123123.</p>
          </div>
        </div>
      </td>
      <td className="shopping-cart-table-body-total">
        <div className="shopping-cart-table-body-total-flexparent">
          <FontAwesome name="usd" />
          <h3>{'\u00A0'}{`${juiceObj.subTotal}.00`}</h3>
        </div>
      </td>
    </tr>
  );
}

ShoppingCartWebProductRow.propTypes = propTypes;
export default ShoppingCartWebProductRow;
