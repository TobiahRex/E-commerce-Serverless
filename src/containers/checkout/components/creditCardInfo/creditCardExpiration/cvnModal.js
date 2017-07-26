import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function CvnModal({ showModal, modalHandler }) {
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

  return (
    <div style={style} className="register-modal">
      <div className="register-modal__dialogue">
        <div className="dialogue__exit--container">
          <button
            data-parent="promotion-register"
            data-tag=""
            className="exit-btn"
            onClick={modalHandler}
          >
            <FontAwesome name="plus" />
          </button>
        </div>
        <div className="dialogue__product-title">
          <h1 className="product-title__title">
            {'What\'s'} A CVN?
          </h1>
          <br />
          <p className="product-title__sub-title">
            {'\'CVN\''} is a <i>{'\'Card Verification Number\''}</i>
          </p>
          <br />
          <p className="product-title__sub-title">
            It is located on the back of your credit card.
          </p>
          <br />
          <p className="product-title__sub-title">
            Whoah! {'That\'s'}
            <span className="required sub-title__bold">
              {'\u00A0'}35% OFF!{'\u00A0'}
            </span>
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
                  35% OFF = $ {discount}
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
            data-parent="promotion-register"
            data-tag=""
            className="action-btn__close primary-button sweep-right"
            onClick={modalHandler}
          >Close</button>

          <button
            data-parent="promotion-register"
            data-tag="view-signup"
            className="action-btn__juices primary-button sweep-right"
            onClick={modalHandler}
          >Sign Me Up</button>
        </div>
      </div>
    </div>
  );
}
const { bool, number, func } = PropTypes;
CvnModal.propTypes = {
  loggedIn: bool.isRequired,
  taxRate: number.isRequired,
  showModal: bool.isRequired,
  modalHandler: func.isRequired,
};
export default RegisterModal;
