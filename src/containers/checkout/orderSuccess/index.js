import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import { graphql, compose } from 'react-apollo';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
  OrderHeader,
  ShipTo,
  BillTo,
  OrderSummary,
} from './components';

import {
  FetchSagawa,
  FetchMultipleProducts,
} from '../../../graphql/queries';

import {
  arrayDeepEquality as ArrayDeepEquality,
} from '../utilities.imports';

class OrderSuccess extends React.Component {

  shouldComponentUpdate(nextProps) {
    /**
    * Function: "isArrayEqual"
    * 1) Uses lodash to determine if an array of nested values are different between nextProps "np" & this.props "tp".
    *
    * @param {object} np - nextProps
    * @param {object} tp - this.props
    *
    * @return {boolean} true/false.
    */

    if (
      !_.isEqual(nextProps, this.props) ||
      !ArrayDeepEquality(nextProps.userCart, this.props.products) ||
      !_.isEqual(nextProps, this.props)
    ) return true;

    // if (!_.isEqual(nextState, this.state)) return true;

    return false;
  }

  routeChange = e => this.props.push(e.target.dataset.slug)

  renderBody = (props) => {
    const {
      products,
      transactionInfo: {
        _id: transactionId,
        date,
        comments,
        // termsAgreement,
        // user,
        emailAddress,
        // invoiceEmailNoTracking,
        jpyFxRate,
        total: {
          subTotal,
          taxes,
          // grandTotal,
          discount,
        },
        square: {
          billingCountry,
          shippingAddress: {
            shippingPrefecture,
            shippingCity,
          },
          cardInfo: {
            last4,
            nameOnCard,
            postalCode,
          },
          charge: {
            amount: chargedAmount,
          },
        },
      },
      sagawaInfo: {
        _id: sagawaId,
        // userId,
        // transactionId,
        // status,
        // uploadForm,
        shippingAddress: {
          referenceId,
          shipdate,
          customerName,
          postal,
          jpaddress1,
          jpaddress2,
          phoneNumber,
          // deliveryDate,
        },
        // items,
      },
    } = props;
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
            date={date}
            invoice={sagawaId}
            trackingId={referenceId}
            orderId={transactionId}
            paidTotal={chargedAmount}
          />
        </div>
        <div className="ordered__addresses">
          <ShipTo
            fullName={customerName}
            jpAddress1={jpaddress1}
            jpAddress2={jpaddress2}
            city={shippingCity}
            prefecture={shippingPrefecture}
            postalCode={postal}
            country={'Japan'}
            phone={phoneNumber}
          />
          <BillTo
            nameOnCard={nameOnCard}
            billingPostalCode={postalCode}
            billingCountry={billingCountry}
            ccLastFour={last4}
          />
        </div>
        <OrderSummary
          shippingStatus={`Shipping on ${shipdate}`}
          trackingId={referenceId}
          orderProducts={products}
          grandTotal={chargedAmount}
          comments={comments}
          subTotal={subTotal}
          taxes={taxes}
          discount={discount}
          emailAddress={emailAddress}
          jpyFxRate={jpyFxRate}
        />
        <div className="ordered__action-btns">
          <button
            className="back-to-home sweep-right primary-flex-button"
            data-slug="/"
            onClick={this.routeChange}
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

  render() {
    console.log('this.props: ', this.props);

    return (
      <div>
        {
          this.props.sagawaInfo.loading ?
            <h1 className="main__loading">
              <FontAwesome name="spinner" pulse size="3x" />
              <br />
              Loading...
            </h1>
          :
          this.renderBody(this.props)
        }
      </div>
    );
  }
}

// const OrderSuccessWithState = connect(({ orders }, ownProps) => ({
//   orderProducts: ownProps.FetchMultipleProducts.products,
//   sagawaInfo: ownProps.FetchSagawa.sagawaInfo,
// }), dispatch => ({
  // push: location => dispatch(push(location)),
// }))(OrderSuccess);

const OrderSuccessWithState = compose(
  graphql(FetchSagawa, {
    name: 'sagawaInfo',
    options: ({ transactionInfo }) => ({
      variables: { id: transactionInfo.sagawa },
    }),
  }),
  graphql(FetchMultipleProducts, {
    name: 'products',
    options: ({ transactionInfo }) => {
      const productIds = transactionInfo.products.map(({ _id }) => _id);
      return ({
        variables: { ids: productIds },
      });
    },
  }),
)(OrderSuccess);

const OrderSuccessWithStateAndData = connect(({ orders }) => ({
  transactionInfo: orders.transaction,
  sagawa: null,
}), dispatch => ({
  push: location => dispatch(push(location)),
}))(OrderSuccessWithState);

const { func, shape, string, bool, number, arrayOf, object } = PropTypes;

OrderSuccess.propTypes = {
  push: func.isRequired,
  products: arrayOf(object),
  transactionInfo: shape({
    _id: string,
    date: string,
    comments: string,
    termsAgreement: bool,
    user: string,
    emailAddress: string,
    invoiceEmailNoTracking: string,
    jpyFxRate: string,
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
      billingCountry: string,
      shippingAddress: shape({
        shippingPrefecture: string,
        shippingCity: string,
      }),
      cardInfo: shape({
        last4: number,
        nameOnCard: string,
        postalCode: string,
      }),
      charge: shape({
        amount: string,
      }),
    }),
  }),
  sagawaInfo: shape({
    _id: string,
    userId: string,
    transactionId: string,
    status: string,
    uploadForm: string,
    shippingAddress: shape({
      referenceId: string,
      shipdate: string,
      customerName: string,
      postal: string,
      jpaddress1: string,
      jpaddress2: string,
      phoneNumber: string,
      deliveryDate: string,
    }),
    items: arrayOf(
      shape({
        productId: string,
        itemcd: string,
        itemname: string,
        piece: number,
        unitprice: number,
      }),
    ),
  }),
};
OrderSuccess.defaultProps = {
  orderProducts: [],
  sagawaInfo: {},
  transactionInfo: {},
};
export default OrderSuccessWithStateAndData;
