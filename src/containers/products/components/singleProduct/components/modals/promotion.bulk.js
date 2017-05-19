import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function BulkSaleModal({ taxRate, productObj, showModal, modalHandler }) {
  let style;
  if (showModal) {
    style = {
      display: 'flex',
      opacity: 1,
      height: '100%',
      width: '100%',
    };
  } else {
    style = {
      display: 'none',
      opacity: 0,
      height: 0,
      width: 0,
    };
  }
  const newTaxRate = (taxRate * 100).toFixed(2);
  const discount = ((120 + Number(newTaxRate)) * -0.25).toFixed(2);
  const orderTotal = ((120 + Number(newTaxRate)) * 0.75).toFixed(2);
  return (
    <div style={style} className="bulk-modal">
      <div className="bulk-modal__dialogue">
        <div className="dialogue__exit--container">
          <button
            data-parent="promotion-bulk"
            data-tag=""
            className="exit-btn"
            onClick={modalHandler}
          >
            <FontAwesome name="plus" />
          </button>
        </div>
        <div className="dialogue__product-title">
          <h1 className="product-title__title">
            {'Let\'s Make a Deal'}!
          </h1>
          <p className="product-title__sub-title">
            <span className="required sub-title__bold"> BUY 4 BOTTLES </span>
            and we’ll slice
            <span className="required sub-title__bold"> 25% OFF </span>
            the price.
          </p>
          <br />
          <p className="product-title__example">
            <i>Example:</i>
          </p>
        </div>
        <table className="dialogue__table">
          <thead className="table__header">
            <tr className="header__row">
              <th className="header--qty">
                <h4>QTY</h4>
              </th>
              <th className="header--description">
                <h4>Juice Description</h4>
              </th>
              <th className="header--price">
                <h4>Price</h4>
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="body__row--main">
              <td className="body--qty">
                <p>4</p>
              </td>
              <td className="body--description">
                <p className="description__title">Fruity Bamm-Bamm</p>
                <br />
                <p className="description__nicotine-strength">
                  Nicotine Strenght: <i>6mg</i>
                </p>
                <br />
                <p className="description__sku">
                  SKU: VSJ0001
                </p>
              </td>
              <td className="body--price">
                <p className="price__readout">
                  $ 120.00
                </p>
              </td>
            </tr>
            <tr className="body__row--totals">
              <td className="body__totals--categories" colSpan="2">
                <p className="category__subtotal">Subtotal</p>
                <br />
                <p className="category__tax">Tax</p>
                <br />
                <p className="category__discount required">Discount</p>
                <br />
                <p className="category__shipping">Free International Shipping</p>
                <br />
                <p className="category__order-total">Order Total</p>
              </td>
              <td className="body__totals--prices">
                <p className="price__subtotal">$ 120.00</p>
                <br />
                <p className="price__tax">$ {newTaxRate}</p>
                <br />
                <p className="price__discount required">
                  25% OFF = $ {discount}
                </p>
                <br />
                <p className="price__shipping">$ 0.00</p>
                <br />
                <p className="price__order-total">$ {orderTotal}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="dialogue__action-btns">
          <button
            data-parent="promotion-bulk"
            data-tag=""
            className="action-btn__close primary-button sweep-right"
            onClick={modalHandler}
          >Close</button>
          <div className="action-btn__msg">
            <div className="msg__title">
              <p>Oh!</p>
            </div>
            <p className="msg__sub-title">
              Did we mention you get
              <span className="sub-title__free required">
                {'\u00A0'}FREE{'\u00A0'}
              </span>
              International Shipping?!
            </p>
          </div>
          <button
            data-parent="promotion-bulk"
            data-tag="view-juices"
            className="action-btn__juices primary-button sweep-right"
            onClick={modalHandler}
          >{'Let\'s Do It!'}</button>
        </div>
      </div>
    </div>
  );
}
const { bool, func, number, objectOf, any } = PropTypes;j
BulkSaleModal.propTypes = {
  taxRate: number.isRequired,
  showModal: bool.isRequired,
  modalHandler: func.isRequired,
  productObj: objectOf(any).isRequired,
};
export default BulkSaleModal;
