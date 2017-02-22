import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function CartTable() {
  const juices = [{
    imgSrc: 'https://s3-ap-southeast-2.amazonaws.com/nj2jp/frenchVanilla_zero_tightCrop_smallSize_zero.jpg',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
    price: '30',
    qty: 2,
  }, {
    imgSrc: 'https://s3-ap-southeast-2.amazonaws.com/nj2jp/frenchVanilla_zero_tightCrop_smallSize_zero.jpg',
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
      <tr key={`shopping-cart-table-row-${juiceObj.name}-${i}`} className="shopping-cart-table-body-row">
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
            </div>
          </div>
        </td>
        <td className="shopping-cart-table-body-total">
          <div className="shopping-cart-table-body-total-flexparent">
            <FontAwesome name="usd" />
            {'\u0020'}{`${subTotal}.00`}
          </div>
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
          <tbody className="shopping-cart-table-body-container">
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
