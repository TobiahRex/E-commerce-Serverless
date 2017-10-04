import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function BulkSaleModal({ taxRate, showModal, modalHandler }) {
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
            <IntlMsg id="product.modal.bulk.title" />&nbsp;
          </h1>
          <p className="product-title__sub-title">
            <span className="required sub-title__bold">
              <IntlMsg id="product.modal.bulk.subtitle1" />&nbsp;
            </span>
            <IntlMsg id="product.modal.bulk.subtitle2" />&nbsp;
            <span className="required sub-title__bold">
              25% OFF&nbsp;
            </span>
            <IntlMsg id="product.modal.bulk.subtitle3" />&nbsp;
          </p>
          <br />
          <p className="product-title__example">
            <i>
              <IntlMsg id="product.modal.bulk.title.example" />
            </i>
          </p>
        </div>
        <table className="dialogue__table">
          <thead className="table__header">
            <tr className="header__row">
              <th className="header--qty">
                <h4>
                  <IntlMsg id="product.modal.bulk.header.qty" />
                </h4>
              </th>
              <th className="header--description">
                <h4>
                  <IntlMsg id="product.modal.bulk.header.description" />
                </h4>
              </th>
              <th className="header--price">
                <h4>
                  <IntlMsg id="product.modal.bulk.header.price" />
                </h4>
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="body__row--main">
              <td className="body--qty">
                <p>
                  <IntlMsg id="product.modal.bulk.row.qty" />
                </p>
              </td>
              <td className="body--description">
                <p className="description__title">
                  <IntlMsg id="product.modal.bulk.row.flavor" />
                </p>
                <br />
                <p className="description__nicotine-strength">
                  <IntlMsg id="product.modal.bulk.row.strength" />&nbsp;
                  <i>6mg</i>
                </p>
                <br />
                <p className="description__sku">
                  SKU: NJ2JP0001
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
                <p className="category__subtotal">
                  <IntlMsg id="product.modal.bulk.row.subtotal" />
                </p>
                <br />
                <p className="category__tax">
                  <IntlMsg id="product.modal.bulk.row.tax" />
                </p>
                <br />
                <p className="category__discount required">
                  <IntlMsg id="product.modal.bulk.row.discount" />
                </p>
                <br />
                <p className="category__shipping">
                  <IntlMsg id="product.modal.bulk.row.shipping" />
                </p>
                <br />
                <p className="category__order-total">
                  <IntlMsg id="product.modal.bulk.row.total" />
                </p>
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
          >
            <IntlMsg id="product.modal.bulk.btns.close" />
          </button>
          <div className="action-btn__msg">
            <div className="msg__title">
              <p>
                <IntlMsg id="product.modal.bulk.msg.oh" />
              </p>
            </div>
            <p className="msg__sub-title">
              <IntlMsg id="product.modal.bulk.msg.mention" />&nbsp;
              <span className="sub-title__free required">
                {'\u00A0'}FREE{'\u00A0'}
              </span>
              <IntlMsg id="product.modal.bulk.msg.intl-shipping" />
            </p>
          </div>
          <button
            data-parent="promotion-bulk"
            data-tag="view-juices"
            className="action-btn__juices primary-button sweep-right"
            onClick={modalHandler}
          >
            <IntlMsg id="product.modal.bulk.msg.lets-do-it" />
          </button>
        </div>
      </div>
    </div>
  );
}
const { bool, func, number } = PropTypes;
BulkSaleModal.propTypes = {
  taxRate: number.isRequired,
  showModal: bool.isRequired,
  modalHandler: func.isRequired,
};
export default BulkSaleModal;
