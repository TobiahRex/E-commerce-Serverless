import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

import MobileClosedOrders from './userDashboard_orders_mobile/userDashboard_orders_closed_mobile';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function ClosedOrders() {
  return (
    <div className="dashboard__closed-orders">
      <div className="dashboard__filter">
        {/* TODO: These 3 element will be rendered dynamically. */}
        <div className="filter__results-msg">
          <p className="result-msg--number">99</p>
          <p className="results-msg--periodcity">Completed</p>
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
                <h3>Shipped To</h3>
              </th>
              <th className="header__bill-to">
                <h3>Billed To</h3>
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
                <p>{new Date()}</p>
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
                <p>Delivered</p>
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
                      <li className="list--write-review">
                        {/* TODO:  1) the address here needs to dynamically add juice-name. 2) "Write A Review" button is only displayed for users who have purchased this item.  */}
                        <button className="medium-size-btn sweep-right" onClick={() => browserHistory.push('/juice/juice-name')}>Write A Review</button>
                      </li>
                      <li className="list--order-number">
                        <p>Order #:{'\u00A0'}
                          <span className="order-number--order">
                            {/* TODO: Dyanmic */}
                            123123123
                          </span>
                        </p>
                      </li>
                      <li className="list--order-number">

                        {/* TODO: RR address = Dynamic */}
                        <p>Tracking #:{'\u00A0'}</p>

                        {/* TODO: Dyanmic - Get user id for first half of href */}
                        <Link
                          to={`/user_123123123/tracking_${123123123}`} className="order-number--link"
                        >123123123</Link>
                      </li>
                      <li className="list--order-invoice">

                        {/* TODO: RR address = Dynamic */}
                        <p>Invoice #:{'\u00A0'}</p>

                        {/* TODO: Dyanmic */}
                        <Link
                          to={`user_123123123/invoice_${123123123}`} className="order-number--invoice"
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
ClosedOrders.propTypes = propTypes;
ClosedOrders.Mobile = MobileClosedOrders;
export default ClosedOrders;
