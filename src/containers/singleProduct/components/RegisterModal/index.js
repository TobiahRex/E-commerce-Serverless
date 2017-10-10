import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function RegisterModal({ showModal, loggedIn, modalHandler, taxRate }) {
  let style;
  if (!loggedIn && showModal) {
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
  const discount = ((120 + Number(newTaxRate)) * -0.35).toFixed(2);
  const orderTotal = ((120 + Number(newTaxRate)) * 0.65).toFixed(2);
  return (
    <div style={style} className="product-page__member-modal">
      <div className="member-modal__content-container">
        <div className="content-container__exit-btn">
          <div className="exit-btn__btn-container" data-ix="product-page-exit-button-hover">
            <button
              data-parent="promotion-register"
              data-tag=""
              data-ix="product-page-close-new-member-modal"
              className="btn-container__exit-btn w-inline-block sweep-right-red"
              onClick={modalHandler}
            >
              <div className="exit-btn__text">
                <FontAwesome name="plus" />
              </div>
            </button>
          </div>
        </div>
        <div className="content-container__hdr-container">
          <h1 className="hdr-container__hdr-text">
            <IntlMsg id="product.modal.register.title" />
          </h1>
        </div>
        <div className="content-container__sub-hdr-container">
          <div className="sub-hdr-container__blurb">
            <IntlMsg id="product.modal.register.become" />&nbsp;
            <strong className="blurb__red-text">10% OFF</strong>&nbsp;
            <IntlMsg id="product.modal.register.first-order" />
          </div>
          <div className="sub-hdr-container__blurb">
            <IntlMsg id="product.modal.register.discount-also" />&nbsp;
            <strong className="blurb__red-text">
              <IntlMsg id="product.modal.register.discount-bottles" />
            </strong>&nbsp;
            <IntlMsg id="product.modal.register.discount-additional" />&nbsp;
            <strong className="blurb__red-text">
              25% OFF!
            </strong>
          </div>
          <div className="sub-hdr-container__blurb">
            <IntlMsg id="product.modal.register.discount-whoah" />&nbsp;
            <strong className="blurb__red-text">35% OFF!</strong></div>
        </div>
        <div className="content-container__example-container">
          <div className="example-container__section-hdr">
            <div className="section-hdr__example-blurb">
              <i>
                <IntlMsg id="product.modal.register.discount-example" />
              </i>
            </div>
          </div>
          <div className="example-container__product-table">
            <div className="product-table__top-row">
              <div className="top-row__table-hdr">
                <div className="table-hdr__hdr-blurb">
                  <IntlMsg id="product.modal.register.header.qty" />
                </div>
              </div>
              <div className="top-row__table-hdr">
                <div className="table-hdr__hdr-blurb">
                  <IntlMsg id="product.modal.register.header.description" />
                </div>
              </div>
              <div className="top-row__table-hdr">
                <div className="table-hdr__hdr-blurb">
                  <IntlMsg id="product.modal.register.header.price" />
                </div>
              </div>
            </div>
            <div className="product-table__content-row">
              <div className="content-row__content-container">
                <div className="content-container__blurb-text">4</div>
              </div>
              <div className="content-row__content-container">
                <div className="content-container__body-text">
                  <div className="body-text__product-title">
                    <div className="product-title__blurb-text">
                      <IntlMsg id="product.modal.register.row.flavor" />
                    </div>
                  </div>
                  <div className="body-text__nicotine-description">
                    <div className="nicotine-description__blurb-text">
                      <IntlMsg id="product.modal.register.row.strength" />&nbsp;
                      <i>6mg</i>
                    </div>
                  </div>
                  <div className="body-text__sku">
                    <div className="sku__blurb-text">
                      SKU: NJ2JP0001
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-row__content-container">
                <div className="content-container__blurb-text">$ 120.00</div>
              </div>
            </div>
            <div className="product-table__order-summary">
              <div className="order-summary__order-text">
                <p className="order-text__blurb">
                  <IntlMsg id="product.modal.register.row.subtotal" />
                  <br />
                  <IntlMsg id="product.modal.register.row.tax" />
                  <br />
                  <em className="blurb__red-text red-text--order-text">
                    <IntlMsg id="product.modal.register.row.discount" />
                  </em>
                  <br />
                  <IntlMsg id="product.modal.register.row.shipping" />
                  <br />
                  <IntlMsg id="product.modal.register.row.total" />
                </p>
              </div>
              <div className="order-summary__order-cost">
                <p className="order-cost__blurb">
                  $ 120.00
                  <br />
                  $ {newTaxRate}
                  <br />
                  <em className="blurb__red-text red-text--order-text">
                    35% OFF = $ {discount}
                  </em>
                  <br />
                  $ 0.00
                  <br />
                  <em className="blurb__total-text--mobile-position">
                    $ {orderTotal}
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container__action-btn">
          <div className="action-btn__btn-row btn-row--member-modal">
            <div className="btn-row__btn-container" data-ix="product-page-action-button-hover">
              <button
                data-parent="promotion-register"
                data-tag="view-signup"
                className="btn-container__action-btn w-inline-block"
                onClick={modalHandler}
              >
                <div className="action-btn__blurb-text">
                  <IntlMsg id="product.modal.register.btns.sign-up" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const { bool, number, func } = PropTypes;
RegisterModal.propTypes = {
  loggedIn: bool.isRequired,
  taxRate: number.isRequired,
  showModal: bool.isRequired,
  modalHandler: func.isRequired,
};
export default RegisterModal;
