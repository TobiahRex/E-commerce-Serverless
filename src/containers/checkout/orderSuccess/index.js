import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { graphql } from 'react-apollo';

import {
  OrderHeader,
  ShipTo,
  BillTo,
  OrderSummary,
} from './components';

import {
  FetchSagawa,
} from '../../../graphql/queries';

class OrderSuccess extends React.Component {
  constructor() {
    super(props);

  }
  render () {
    console.log('this.props: ', this.props);

    const {
      trackingInfo,
      sagawaInfo,
    } = this.props;

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
          shippingStatus={}
          trackingId={}
          qty={}
          nicotineStrength={}
          sku={}
          price={}
          subTotal={}
          taxes={}
          grandTotal={}
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

const { shape, string, bool, number, arrayOf } = PropTypes;

OrderSuccess.propTypes = {
  transactionInfo: shape({
    _id: string,
    error: shape({
      hard: bool,
      soft: bool,
      message: string,
    }),
    date: string,
    comments: string,
    termsAgreement: bool,
    user: string,
    products: arrayOf(
      shape({
        _id: string,
        qty: number,
      }),
    ),
    sagawa: string,
    emailAddress: string,
    emailLanguage: string,
    invoiceEmailNoTracking: string,
    jpyFxRate: string,
    taxes: shape({
      cityRate: string,
      stateRate: string,
      totalRate: string,
    }),
    total: shape({
      subTotal: string,
      taxes: string,
      grandTotal: string,
      discount: shape({
        qty: bool,
        qtyAmount: string,
        register: bool,
        registerAmount: string,
      }),
    }),
    square: shape({
      locationId: string,
      transactionId: string,
      billingCountry: string,
      shippingAddress: shape({
        shippingPrefecture: string,
        shippingCity: string,
      }),
      cardInfo: shape({
        last4: number,
        nameOnCard: string,
        cardNonce: string,
        postalCode: string,
      }),
      charge: shape({
        amount: string,
        currency: string,
      }),
    }),
  }).isRequired,
  sagawaInfo: shape({
    userId: string,
    transactionId: string,
    status: string,
    uploadForm: string,
    shippingAddress: shape({
      awbId: string,
      referenceId: string,
      boxid: string,
      shipdate: string,
      customerName: string,
      postal: string,
      jpaddress1: string,
      jpaddress2: string,
      phoneNumber: string,
      kbn: string,
      wgt: number,
      grandTotal: number,
      deliveryDate: string,
      deliveryTime: number,
      souryo: number,
      tesuryo: number,
      ttlAmount: number,
      codFlg: number,
    }),
    items: arrayOf(
      shape({
        productId: string,
        itemcd: string,
        itemname: string,
        usage: number,
        origin: string,
        piece: number,
        unitprice: number,
      })
    ),
  }),
};

export default OrderSuccessWithOrderInfo;
