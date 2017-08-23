import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import {
  OrderHeader,
  ShipTo,
  BillTo,
  OrderSummary,
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
          <BillTo
            billingGivenName={}
            billingFamilyName={}
            billingPostalCode={}
            billingCountry={}
            ccLastFour={}
          />
        </div>
        <OrderSummary

        />
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
