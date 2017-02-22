import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function CartTable() {
  const juices = [{
    imgSrc: '',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
    price: '30',
    qty: 2,
  }, {
    imgSrc: '',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
    price: '30',
    qty: 2,
  }];

  const renderJuices = () =>
  juices.map((juiceObj, i) => {
    const subTotal = juiceObj.qty * Number(juiceObj.price);
    return (
      <tr key={`shopping-cart-table-row-${juiceObj.name}-${i}`} className="shopping-cart-table-body-container">
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
        <td className="shopping-cart-table-body-price">
          {juiceObj.price}
        </td>
        <td className="shopping-cart-table-body-qty">
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
          </div>
        </td>
        <td className="shopping-cart-table-body-total">
          <FontAwesome name="usd" />
          {'\u0020'}{`${subTotal}.00`}
        </td>
      </tr>
    );
  });
  const taxesAmt = 99;
  const grandTotalAmt = 99;

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
      <div className="shopping-cart-parent">
        <table className="shopping-cart-table">
          <thead className="shopping-cart-table-header-container">
            <tr className="shopping-cart-table-header-titles">
              <th className="shopping-cart-table-header-juice">
                <h3>Juice</h3>
              </th>
              <th className="shopping-cart-table-header-price">
                <h3>Price</h3>
              </th>
              <th className="shopping-cart-table-header-qty">
                <h3>Quantity</h3>
              </th>
              <th className="shopping-cart-table-header-total">
                <h3>Total</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {renderJuices()}
          </tbody>
        </table>
        <div className="shopping-cart-analysis-main">
          <div className="shopping-cart-analysis-taxes">
            <div className="shopping-cart-analysis-taxes-title">Taxes</div>
            <div className="shopping-cart-analysis-taxes-cost">
              <FontAwesome name="usd" />
              <p>{'\u0020'}{`${taxesAmt}.00`}</p>
            </div>
          </div>
          <div className="shopping-cart-analysis-grandt">
            <div className="shopping-cart-analysis-grandt-title">
              Grand Total
            </div>
            <div className="shopping-cart-analysis-grandt-cost">
              <FontAwesome name="usd" />
              <p>{'\u0020'}{`${grandTotalAmt}.00`}</p>
            </div>
          </div>
        </div>
        <div className="shopping-cart-action-btns-parent">
          <button className="shopping-cart-action-btn-checkout">
            <FontAwesome name="credit-card-alt" />
            {'\u0020'}Express Checkout
          </button>
          <button className="shopping-cart-action-btn-clear">
            Clear Shopping Cart
          </button>
        </div>
        <div className="shopping-cart-back-parent">
          <button className="shopping-cart-back">
            Back To Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
