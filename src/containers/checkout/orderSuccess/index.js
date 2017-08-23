import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import {
  OrderHeader,
} from './components';

class OrderSuccess extends React.Component {
  constructor() {
    super(props);

  }
  render () {
    console.log('this.props: ', this.props);
    return (
      <div className="ordered--main">
        <div className="ordered--container">
          <div className="ordered__title">
            <div className="title--icon">
              <FontAwesome name="check-circle" />
            </div>
            <div className="title--msg">
              <h1>Your order has been successfully placed!</h1>
              <h4>The invoice shown below has been sent to your email.</h4>
            </div>
          </div>
          <OrderHeader
            date={}
            invoice={}
            trackingId={}
            orderId={}
            paidTotal={}
          />
        </div>
        <div className="ordered__addresses">
          <ShipTo
            givenName={}
            familyName={}
            shippingAddress={}
            shippingCity={}
            shippingPrefecture={}
            shippingPostalCode={}
            shippingCountry={}
            shippingPhone={}
          />
          <BillingAddress
            
          />
        </div>
        <div className="ordered__order-summary">
          <fieldset className="order-summary--fieldset">
            <legend className="order-summary--legend">
              <p>Order Summary</p>
            </legend>
            <table className="order-summary__table" cellPadding="0" cellSpacing="0">
              <thead className="table--thead">
                <tr>
                  <th colSpan="1">
                    <p>Qty</p>
                  </th>
                  <th colSpan="3">
                    <p>Juice Description</p>
                  </th>
                  <th colSpan="2">
                    <p>Price</p>
                  </th>
                </tr>
              </thead>
              <tbody className="table--body">
                <tr className="body--shipping-status-row">
                  <td colSpan="5">
                    <p>{'<Shipping Status>'} {'\u2013'} Tracking #:
                      {/* TODO: These query params need to be dynamically assigned. */}
                      <Link
                        className="tracking-id"
                        to="/user:123123123/orders:123123/tracking:123123123"
                      >{'\u00A0'}{uuid()}</Link>
                    </p>
                  </td>
                </tr>
                <tr className="body--product-row">
                  <td colSpan="1">
                    <p>{'<Qty>'}</p>
                  </td>
                  <td colSpan="3">
                    <ul className="product-row__list">
                      <li className="list--title">
                        <p>{'<Product Description>'}</p>
                      </li>
                      <li className="list--nic-strength">
                        <p>{'<Nic Strength>'}{'\u00A0'}mg</p>
                      </li>
                      <li className="list--sku">
                        <p>SKU: {uuid()}</p>
                      </li>
                    </ul>
                  </td>
                  <td colSpan="2">
                    <p>
                      <FontAwesome name="usd" />{'\u00A0'}
                      {'<Price>'}.00
                    </p>
                  </td>
                </tr>
                <tr className="body--total-analysis">
                  <td colSpan="4">
                    <ul className="total-analysis--list-title">
                      <li className="list-title--subtotal">
                        <p>Subtotal</p>
                      </li>
                      <li className="list-title--tax">
                        <p>Tax</p>
                      </li>
                      <li className="list-title--shipping">
                        <p>Free International Shipping</p>
                      </li>
                      <li className="list-title--order-total">
                        <p>Order Title</p>
                      </li>
                    </ul>
                  </td>
                  <td colSpan="2">
                    <ul className="total-analysis--list-value">
                      <li className="list-value--subtotal">
                        <p>
                          <FontAwesome name="usd" />{'\u00A0'}{'<SubTotal>'}.00
                        </p>
                      </li>
                      <li className="list-value--tax">
                        <p>
                          <FontAwesome name="usd" />{'\u00A0'}{'<Tax>.<tax>'}
                        </p>
                      </li>
                      <li className="list-value--shipping">
                        <p>
                          <FontAwesome name="usd" />{'\u00A0'}0.00
                        </p>
                      </li>
                      <li className="list-value--order-total">
                        <p>
                          <FontAwesome name="usd" />{'\u00A0'}{'<Final Total>'}
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </div>
        <div className="ordered__action-btns">
          <button
            className="back-to-home sweep-right primary-flex-button"
            onClick={() => history.push('/')}
          >
            <span className="flex-btn-parent">
              <FontAwesome name="angle-double-left" />
              {'\u00A0'}Back To Homepage
            </span>
          </button>
        </div>
      </div>
    );
  }
}

const OrderSuccessWithState = connect(({ orders }, ownProps) => ({
  billingAddress:
}))(OrderSuccess);

const OrderSuccessWithOrderInfo = graphql(FetchSagawa, {
  name: 'sagawaInfo',
})(OrderSuccessWithState);


export default OrderSuccessWithOrderInfo;
