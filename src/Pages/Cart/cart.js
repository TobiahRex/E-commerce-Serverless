import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function CartTable() {
  const juice1 = {
    imgSrc: '',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
  }
  const juice2 = {
    imgSrc: '',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
  }
  const juices = [juiceObj1, juiceObj2];

  const renderJuices = () => {
    jucies.map((juiceObj) => {

    })
  }

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
                <img className="shopping-cart-table-body-infobox-img-src" alt={juiceObj1.imgSrc} />
              </div>
              <ul className="shopping-cart-table-body-infobox-list">
                <li className="shopping-cart-table-body-infobox-title">
                  {juiceObj1.name}
                </li>
                <li className="shopping-cart-table-body-infobox-nicotine">
                  {juiceObj1.nicotine}
                </li>
                <li className="shopping-cart-table-body-infobox-sku">
                  {juiceObj1.sku}
                </li>
                <li className="shopping-cart-table-body-infobox-trash">
                  <FontAwesome name="trash-o" />
                </li>
              </ul>
            </td>
          </tr>
          <tr className="shopping-cart-table-body-container">
            <td className="shopping-cart-table-body-infobox">
              <div className="shopping-cart-table-body-infobox-img">
                <img className="shopping-cart-table-body-infobox-img-src" alt={juiceObj2.imgSrc} />
              </div>
              <ul className="shopping-cart-table-body-infobox-list">
                <li className="shopping-cart-table-body-infobox-title">
                  {juiceObj2.name}
                </li>
                <li className="shopping-cart-table-body-infobox-nicotine">
                  {juiceObj2.nicotine}
                </li>
                <li className="shopping-cart-table-body-infobox-sku">
                  {juiceObj2.sku}
                </li>
                <li className="shopping-cart-table-body-infobox-trash">
                  <FontAwesome name="trash-o" />
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
