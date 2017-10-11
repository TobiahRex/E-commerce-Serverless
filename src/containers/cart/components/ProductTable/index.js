import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ProductTable({
  cart,
  taxes,
  grandTotal,
  showProductRow,
}) {
  return (
    <div className="shopping-cart__table-container">
      <div className="table-container__top-row">
        <div className="title-container--juice top-row__title-container" data-ix="shopping-cart-top-row-load">
          <h3 className="title-container__blurb">
            <IntlMsg id="cart.table.header.juice" />
          </h3>
        </div>
        <div className="title-container--price top-row__title-container" data-ix="shopping-cart-top-row-load-2">
          <h3 className="title-container__blurb">
            <IntlMsg id="cart.table.header.price" />
          </h3>
        </div>
        <div className="title-container--qty top-row__title-container" data-ix="shopping-cart-top-row-load-3">
          <h3 className="title-container__blurb">
            <IntlMsg id="cart.table.header.qty" />
          </h3>
        </div>
        <div className="title-container--total top-row__title-container" data-ix="shopping-cart-top-row-load-4">
          <h3 className="title-container__blurb">
            <IntlMsg id="cart.table.header.total" />
          </h3>
        </div>
      </div>
      <div className="title-container__product-list" data-ix="shopping-cart-product-list-fade">
        {showProductRow(cart, taxes, grandTotal)}
      </div>
    </div>
  );
}
const {
  func,
  number,
  object,
  arrayOf,
} = PropTypes;
ProductTable.propTypes = {
  cart: arrayOf(object),
  taxes: number,
  grandTotal: number,
  showProductRow: func.isRequired,
};
ProductTable.defaultProps = {
  cart: [],
  taxes: 0,
  grandTotal: 0,
};
export default ProductTable;
