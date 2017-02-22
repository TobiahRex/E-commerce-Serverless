import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function CartTable() {
  const juiceName = 'Fruity Bamm-Bamm';
  const
  return (
    <div className="shopping-cart-main">
      <div className="shopping-cart-breadcrumb-container">
        <ul className="shopping-cart-breadcrumb-list">
          <li className="shopping-cart-breadcrumb-path">
            <Link className="breadcrumb-link" to="/">Home</Link>
            <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
          </li>
          <li className="shopping-cart-breadcrumb-path">
            Shopping Cart
          </li>
        </ul>
      </div>
      <div className="shopping-cart-main-title">
        <h1>Shopping Cart</h1>
      </div>
      <div className="shopping-cart-table-container">
        <table className="shopping-cart-table">
          <tr className="shopping-cart-table-header-container">
            <th className="shopping-cart-table-header">Juice</th>
            <th className="shopping-cart-table-header">Price</th>
            <th className="shopping-cart-table-header">Quantity</th>
            <th className="shopping-cart-table-header">Total</th>
          </tr>
          <tr className="shopping-cart-table-body-container">
            <td className="shopping-cart-table-body-infobox">
              <div className="shopping-cart-table-body-infobox-img">
                <img className="shopping-cart-table-body-infobox-img-src" alt={juiceName} />
              </div>
              <ul className="shopping-cart-table-body-infobox-list">
                <li className="shopping-cart-table-body-infobox-title">
                  {juiceTitle}
                </li>
                <li className="shopping-cart-table-body-infobox-nicotine">
                  {juiceNicotine}
                </li>
                <li className="shopping-cart-table-body-infobox-sku">
                  {juiceSku}
                </li>
                <li className="shopping-cart-table-body-infobox-trash">
                  <FontAwesome name="trash-o" />
                </li>
              </ul>
            </td>
            <td className="shopping-cart-table-body-product1">

            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
