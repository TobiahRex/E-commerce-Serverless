import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function OpenOrders() {
  return (
    <div className="dashboard__open-orders">
      <div className="dashboard__filter">
        {/* TODO: These 3 element will be rendered dynamically. */}
        <div className="filter__results-msg">
          <p className="result-msg--number">99</p>
          <p className="results-msg--periodcity">Open Order(s)</p>
          <p className="results-msg--rest">placed in the last</p>
        </div>
        <div className="filter__periodcity-ddn--container">
          <div className="periodicity__ddn--readout">
            <input type="text" className="readout--msg" disabled value="Month" />
            <button className="readout--btn sweep-right">
              <FontAwesome name="angle-down" />
            </button>
          </div>
          <div className="periodicity__ddn--content" style={{ display: 'none' }} >
            <ul className="ddn--content__list">
              {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
              <li className="list--option sweep-right">
                <p>Week</p>
              </li>
              <li className="list--option sweep-right">
                <p>Month</p>
              </li>
              <li className="list--option sweep-right">
                <p>Quarter</p>
              </li>
              <li className="list--option sweep-right">
                <p>Year</p>
              </li>
              <li className="list--option sweep-right">
                <p>All</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dashboard__results-table">
        <table className="results-table--container">
          <thead className="results-table__header">
            <tr className="header--row">
              <th className="header__date">
                <h3>Order Placed</h3>
              </th>
              <th className="header__total">
                <h3>Order Total</h3>
              </th>
              <th className="header__ship-to">
                <h3>Ship To</h3>
              </th>
              <th className="header__bill-to">
                <h3>Bill To</h3>
              </th>
              <th className="header__status">
                <h3>Status</h3>
              </th>
            </tr>
          </thead>
          <tbody className="results-table__body">
            {/* NOTE: Obviously these rows will be dynamic. */}
            <tr className="body__row">
              <td className="row__cell-date">
                <p>{moment().format('LL')}</p>
              </td>
              <td className="row__cell-total">
                <div className="flex-cell-parent">
                  <FontAwesome name="usd" />
                  {'\u00A0'}
                  <p>120.00</p>
                </div>
              </td>
              <td className="row__cell-ship-to">
                <p>1400012, 東京都品川...</p>
              </td>
              <td className="row__cell-bill-to">
                <p>2400 Roudel Lane...</p>
              </td>
              <td className="row__cell-status">
                <p>Shipped</p>
              </td>
            </tr>
            <tr className="body_row--product">
              <td className="product__info" colSpan="5">
                <div className="info--container">
                  <div className="info--product">
                    {/* NOTE: Everything is Dynamic */}
                    <img src="../Images/nj2jp_juice_card_klp.png" alt="" className="product--img" />
                    <div className="product--description">
                      <div className="description--title">
                        <p>Strawberries {'N\''} Cream</p>
                      </div>
                      <div className="description--info">
                        <p className="info__manufacturer">by VapeSwitch</p>
                        <p className="info__nicotine">Nicotine Strength:<i> 6mg</i> </p>
                        <p className="info__sku">SKU: 12312123</p>
                      </div>
                    </div>
                  </div>
                  <div className="info--action-section">
                    <ul className="action-section--list">
                      <li className="list--add-to-cart">
                        <button className="medium-size-btn sweep-right">Add To Cart</button>
                      </li>
                      <li className="list--track-order">
                        <button className="medium-size-btn sweep-right">Track Your Order</button>
                      </li>
                      <li className="list--tracking-number">
                        <p>Tracking #:{'\u00A0'}
                          <span className="order-number--tracking">
                            {/* NOTE: Dyanmic */}
                            123123123
                          </span>
                        </p>
                      </li>
                      <li className="list--order-number">

                        {/* NOTE: RR address = Dynamic */}
                        <p>Order #:{'\u00A0'}</p>

                        {/* NOTE: Dyanmic */}
                        <Link
                          to={`/${123123123}`} className="order-number--link"
                        >123123123</Link>
                      </li>
                      <li className="list--order-invoice">

                        {/* NOTE: RR address = Dynamic */}
                        <p>Invoice #:{'\u00A0'}</p>

                        {/* NOTE: Dyanmic */}
                        <Link
                          to={`/${123123123}`} className="order-number--invoice"
                        >123123123</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
OpenOrders.propTypes = propTypes;
export default OpenOrders;
