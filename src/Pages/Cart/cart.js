import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function CartTable() {
  const juices = [{
    imgSrc: '',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
  }, {
    imgSrc: '',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
  }];

  const renderJuices = () =>
  juices.map(juiceObj => (
    <tr className="shopping-cart-table-body-container">
      <td className="shopping-cart-table-body-infobox">
        <div className="shopping-cart-table-body-infobox-img">
          <img className="shopping-cart-table-body-infobox-img-src" alt={juiceObj.imgSrc} />
        </div>
        <ul className="shopping-cart-table-body-infobox-list">
          <li className="shopping-cart-table-body-infobox-title">
            {juiceObj.name}
          </li>
          <li className="shopping-cart-table-body-infobox-nicotine">
            {juiceObj.nicotine}
          </li>
          <li className="shopping-cart-table-body-infobox-sku">
            {juiceObj.sku}
          </li>
          <li className="shopping-cart-table-body-infobox-trash">
            <FontAwesome name="trash-o" />
          </li>
        </ul>
      </td>
    </tr>)
  );

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
          <thead className="shopping-cart-table-header-container">
            <tr className="shopping-cart-table-header-titles">
              <th className="shopping-cart-table-header">Juice</th>
              <th className="shopping-cart-table-header">Price</th>
              <th className="shopping-cart-table-header">Quantity</th>
              <th className="shopping-cart-table-header">Total</th>
            </tr>
          </thead>
          <tbody>
            {renderJuices()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
