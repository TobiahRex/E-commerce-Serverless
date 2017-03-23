import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import uuid from 'uuid';

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

      <div className="dashboard__products--container">
        <div className="products__image">
          <img src="../Images/nj2jp_juice_card_klp.png" alt="" className="product--img" />
        </div>

        <div className="products__product-info">
          <ul className="product-info--list">
            <li className="list--data">
              <p>{'Strawberries N\' Cream'}</p>
            </li>
            <li className="list--data">
              <p>Nicotine Strength: <i>6</i>{'u00A0'}mg</p>
            </li>
            <li className="list--data">
              <p>SKU: {uuid()}</p>
            </li>
          </ul>
        </div>

        <div className="products__order-info">
          <ul className="order-info--list">
            <li className="list--data order-placed">
              <div>
                <p>Order Placed</p>
              </div>
              <div>
                <p>{moment().format('LLL')}</p>
              </div>
            </li>
            <li className="list--data price">
              <div>
                <p>Price</p>
              </div>
              <div>
                <p>
                  <FontAwesome name="usd" />{'\u00A0'}99.99
                </p>
              </div>
            </li>
            <li className="list--data ship-to">
              <div>
                <p>Ship To</p>
              </div>
              <div>
                <p>1400012, 東京都品川...</p>
              </div>
            </li>
            <li className="list--data bill-to">
              <div>
                <p>Bill To</p>
              </div>
              <div>
                <p>1400 Roudel Lane</p>
              </div>
            </li>
            <li className="list--data">
              <div>
                <p></p>
              </div>
              <div>
                <p></p>
              </div>
            </li>
            <li className="list--data status">
              <div>
                <p>Status</p>
              </div>
              <div>
                <p>Delivered</p>
              </div>
            </li>
            <li className="list--data order-num">
              <div>
                <p>Order #</p>
              </div>
              <div>
                <p>
                  {uuid()}
                </p>
              </div>
            </li>
            <li className="list--data tracking-num">
              <div>
                <p>Tracking #</p>
              </div>
              <div>
                <p>
                  <Link to={`/user_123123123123/tracking/${uuid()}`}>
                    {uuid()}
                  </Link>
                </p>
              </div>
            </li>
            <li className="list--data invoice-num">
              <div>
                <p>Invoice #</p>
              </div>
              <div>
                <p>
                  <Link to={`/user_123123123123/invoice/${uuid()}`}>
                    {uuid()}
                  </Link>
                </p>
              </div>
            </li>
            <li className="list--data quantity">
              <div>
                <p>Quantity</p>
              </div>
              <div>
                <p>3</p>
              </div>
            </li>
            <li className="list--data taxes">
              <div>
                <p>Taxes</p>
              </div>
              <div>
                <p>
                  <FontAwesome name="usd" />{'\u00A0'}9.99
                </p>
              </div>
            </li>
            <li className="list--data total">
              <div>
                <p>Total</p>
              </div>
              <div>
                <p>
                  <FontAwesome name="usd" />{'\u00A0'}999.99
                </p>
              </div>
            </li>
            <li className="list--data__action-btn">
              <button className="action-btn__add-to-cart medium-size-btn">
                Add To Cart
              </button>
              <button className="action-btn__track-order medium-size-btn">
                Track Your Order
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
OpenOrders.propTypes = propTypes;
export default OpenOrders;
